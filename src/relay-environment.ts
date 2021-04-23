// your-app-name/src/RelayEnvironment.js
import { Environment, Network, RecordSource, Store } from 'relay-runtime'

async function fetchGraphQL (text: string, variables: any): Promise<any> {
  const response = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      Authorization: 'bearer someToken',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: text,
      variables
    })
  })

  // Get the response as JSON
  return await response.json()
}

// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchGraphQL utility with params.text.
async function fetchRelay (params: any, variables: any): Promise<any> {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`)
  return await fetchGraphQL(params.text, variables)
}

// Export a singleton instance of Relay Environment configured with our network function:
export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource())
})
