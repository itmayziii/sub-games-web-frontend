import React from 'react'
import logo from './logo.svg'
import './App.css'
import { PreloadedQuery, usePreloadedQuery } from 'react-relay'
import { SubGameSessionByIdQuery } from './relay'
import { relaySubGameSessionByIdQuery } from './__generated__/relaySubGameSessionByIdQuery.graphql'

interface AppProps {
  preloadedQuery: PreloadedQuery<any>
}

const App: React.FC<AppProps> = function App (props) {
  const data = usePreloadedQuery<relaySubGameSessionByIdQuery>(SubGameSessionByIdQuery, props.preloadedQuery)
  console.log('data', data)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ${data?.subGameSessionById?.subGameSession?.id}
        </p>
        <p>
          ${data?.subGameSessionById?.subGameSession?.maxActivePlayers}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
