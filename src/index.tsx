import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'
import { RelayEnvironmentProvider } from 'react-relay'
import RelayEnvironment from './relay-environment'
import { RecoilRoot } from 'recoil'
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles'
import { materialTheme } from './theme'

const rootEl = document.getElementById('root')
// @ts-expect-error
const root = ReactDOM.unstable_createRoot(rootEl)

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <MaterialThemeProvider theme={materialTheme} >
          <App />
        </MaterialThemeProvider>
      </RelayEnvironmentProvider>
    </RecoilRoot>
  </React.StrictMode>
)
