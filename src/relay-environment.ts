import { Environment, Network, RecordSource, RequestParameters, Store, Variables } from 'relay-runtime'
import queryMap from './__generated__/queryMap.json'
import { sha256 as SHA256 } from 'sha.js'

// Export a singleton instance of Relay Environment configured with our network function:
export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource())
})

/**
 * Attempts to make a GraphQL request with a persisted query. This allows us to use GET requests with hashes instead of
 * sending the entire query. The advantages of this is reduced payload sizes and allows us to use browser caching if appropriate
 * for a query since GET requests are cacheable.
 * https://www.apollographql.com/docs/apollo-server/performance/apq/
 * https://relay.dev/docs/guides/persisted-queries/
 */
async function fetchPersistedQuery (id: string, query: string | null | undefined, variables: Variables): Promise<any> {
  const persistedQuery = { persistedQuery: { version: 1, sha256Hash: id } }

  // Having a query is a sign we need to save the persisted query to the API first, so we make a regular GraphQL request.
  if (query !== null && query !== undefined) {
    return await fetchGraphQL(query, variables, persistedQuery)
  }

  const persistedQueryParams = new URLSearchParams({ extensions: JSON.stringify(persistedQuery), variables: JSON.stringify(variables) })
  return await fetch(`https://local-api.sub-games.com/graphql?${persistedQueryParams.toString()}`, {
    method: 'GET',
    credentials: 'include'
  })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error('Bad response from GraphQL server')
      }

      return await response.json()
    })
}

/**
 * Makes a GraphQL request with a POST request to have the most cross browser compatibility. There are some limitations with
 * how long a URL can get for older browsers so a GET request might not be appropriate since a query can get fairly large.
 */
async function fetchGraphQL (query: string | undefined | null, variables: Variables, extensions: any = {}): Promise<any> {
  return await fetch('https://local-api.sub-games.com/graphql', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query,
      variables,
      extensions
    })
  })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error('Bad response from GraphQL server')
      }

      return await response.json()
    })
}

async function fetchRelay (params: RequestParameters, variables: Variables): Promise<any> {
  if (['mutation', 'subscription'].includes(params.operationKind)) {
    return await fetchGraphQL(params.text, variables)
  }

  if (params.id === null || params.id === undefined) {
    return await fetchGraphQL(params.text, variables)
  }

  // @ts-expect-error
  const matchingQuery = queryMap[params.id]
  if (matchingQuery === undefined) {
    throw new Error(`No matching persisted query matches ID - ${params.id}.`)
  }
  const queryHash = generateQueryHash(matchingQuery)

  return await fetchPersistedQuery(queryHash, null, variables)
    .then(body => {
      if (body.errors === undefined) return body

      // TODO find type for GraphQL error
      const hasPersistedQueryError = body.errors.some((error: any) => {
        if (error.extensions === undefined || error.extensions.code === undefined) {
          return false
        }

        return error.extensions.code === 'PERSISTED_QUERY_NOT_FOUND'
      })

      if (params.id === null || params.id === undefined) {
        throw new Error('Persisted query ID is required.')
      }

      if (hasPersistedQueryError === true) {
        return fetchPersistedQuery(queryHash, matchingQuery, variables)
      }

      return body
    })
}

/**
 * Relay suggests you use a the query ID they provide, but Apollo server is extremely picky about how the ID is generated.
 */
function generateQueryHash (query: string): string {
  return new SHA256().update(query).digest('hex')
}
