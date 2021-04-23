import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './report-web-vitals'
import { loadQuery, RelayEnvironmentProvider } from 'react-relay'
import { SubGameSessionByIdQuery } from './relay'
import RelayEnvironment from './relay-environment'
import { relaySubGameSessionByIdQuery } from './__generated__/relaySubGameSessionByIdQuery.graphql'

const rootEl = document.getElementById('root')
// @ts-expect-error
const root = ReactDOM.unstable_createRoot(rootEl)

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery = loadQuery<relaySubGameSessionByIdQuery>(RelayEnvironment, SubGameSessionByIdQuery, {
  id: 'U3ViR2FtZVNlc3Npb246MQ=='
})
root.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'T Loading... T'}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
