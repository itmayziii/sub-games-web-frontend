import React, { useEffect } from 'react'
import { Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Route from './components/route'
import ROUTES from './routes'
import { loadQuery, useMutation } from 'react-relay'
import { RefreshTokenMutation, SessionsByUserIdQuery, SubGameSessionByUserIdQuery } from './relay'
import RelayEnvironment from './relay-environment'
import { useRecoilState } from 'recoil'
import { UserState, userStateAtom } from './recoil/atoms/user'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import ClipLoader from 'react-spinners/ClipLoader'
import { relaySubGameSessionByUserIdQuery } from './__generated__/relaySubGameSessionByUserIdQuery.graphql'
import { relayRefreshTokenMutation } from './__generated__/relayRefreshTokenMutation.graphql'
import { relaySessionsByUserIdQuery } from './__generated__/relaySessionsByUserIdQuery.graphql'
import BottomNav from './components/nav/bottom-nav'

const history = createBrowserHistory()
const SessionByUserIdPageComponent = React.lazy(async () => await import('./pages/session-by-user-id-page'))
const LoginPageComponent = React.lazy(async () => await import('./pages/login-page'))
const NotFoundPageComponent = React.lazy(async () => await import('./pages/not-found-page'))
const SessionsPageComponent = React.lazy(async () => await import('./pages/sessions-page'))
const SettingsPageComponent = React.lazy(async () => await import('./pages/settings-page'))

export default function App (): React.ReactElement {
  const [user, setUser] = useRecoilState<UserState>(userStateAtom)
  const [commit] = useMutation<relayRefreshTokenMutation>(RefreshTokenMutation)

  useEffect(() => {
    const accessToken = Cookies.get('accessToken')
    if (accessToken === undefined) {
      setUser(null)
      return
    }

    try {
      const decodedAccessToken = jwtDecode<UserState>(accessToken)
      if (decodedAccessToken === null || decodedAccessToken === undefined) {
        Cookies.remove('accessToken')
        setUser(null)
        return
      }

      if (decodedAccessToken.exp < Math.round(Date.now() / 1000) - 900) {
        commit({
          variables: {},
          onCompleted () {
            const accessToken = Cookies.get('accessToken')
            if (accessToken === undefined) {
              setUser(null)
              return
            }
            try {
              const decodedAccessToken = jwtDecode<UserState>(accessToken)
              if (decodedAccessToken === null || decodedAccessToken === undefined) {
                Cookies.remove('accessToken')
                setUser(null)
                return
              }
              setUser(decodedAccessToken)
            } catch (error) {
              setUser(null)
            }
          },
          onError () {
            setUser(null)
          }
        })
        return
      }

      setUser(decodedAccessToken)
    } catch (error) {
      setUser(null)
    }
  }, [setUser, commit])

  if (user === undefined) {
    return <ClipLoader size={150} />
  }

  return (
    <Router history={history}>
      <Switch>
        <Route path={ROUTES.login} component={LoginPageComponent} exact={true} requiresAuth={false} />
        <Route
          path={ROUTES.userIdSession}
          component={SessionByUserIdPageComponent}
          exact={true}
          prepare={(routeParams) => {
            if (routeParams?.userId === undefined) throw new Error('Expected userId param')
            return loadQuery<relaySubGameSessionByUserIdQuery>(RelayEnvironment, SubGameSessionByUserIdQuery, { userId: routeParams.userId })
          }}
        />
        <Route
          path={ROUTES.sessions}
          component={SessionsPageComponent}
          exact={true}
          prepare={() => {
            if (user === undefined || user === null) throw new Error('User must be present to prepare data.')
            return loadQuery<relaySessionsByUserIdQuery>(RelayEnvironment, SessionsByUserIdQuery, { userId: user.sub })
          }}
        />
        <Route
          path={ROUTES.settings}
          component={SettingsPageComponent}
          exact={true}
        />

        {/* Default route */}
        <Route path='/' component={NotFoundPageComponent} exact={false} />
      </Switch>
      <BottomNav />
    </Router>
  )
}
