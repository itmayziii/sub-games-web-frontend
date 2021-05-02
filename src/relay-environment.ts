import { Environment, Network, RecordSource, Store } from 'relay-runtime'
import { GraphQLClient } from 'graphql-request'

const graphQLClient = new GraphQLClient('http://localhost:4000/graphql', {
  credentials: 'include'
})

async function fetchGraphQL (text: string, variables: any): Promise<any> {
  return await graphQLClient.request(text, variables)
    .then(data => {
      return {
        data
      }
    })
}

// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchGraphQL utility with params.text.
async function fetchRelay (params: any, variables: any): Promise<any> {
  return await fetchGraphQL(params.text, variables)
}

// Export a singleton instance of Relay Environment configured with our network function:
export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource())
})
