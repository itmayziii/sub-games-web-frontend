import React, { ComponentType, Suspense } from 'react'
import { Route as RouteComponent, Redirect, matchPath, useLocation } from 'react-router-dom'
import { PreloadedQuery } from 'react-relay'
import ClipLoader from 'react-spinners/ClipLoader'
import ErrorBoundary from './errors/error-boundary'
import { useRecoilState } from 'recoil'
import { UserState, userStateAtom } from '../recoil/atoms/user'
import ROUTES from '../routes'

interface RouteProps {
  component: ComponentType<{ preloadedQuery?: PreloadedQuery<any> }>
  path: string
  exact?: boolean
  prepare?: (routeParams?: { [key: string]: string }) => PreloadedQuery<any>
  requiresAuth?: boolean
}

const Route: React.FC<RouteProps> = function Route ({
  component: Component,
  path,
  exact = true,
  prepare,
  requiresAuth = true
}) {
  const [user] = useRecoilState<UserState>(userStateAtom)
  const location = useLocation()

  if (user === null && requiresAuth) {
    return <Redirect exact={exact} from={path} to={ROUTES.login} />
  }

  return (
    <RouteComponent path={path} exact={exact} render={() => {
      // Using matchPath to get params instead of "useParams" as we can't use useParams inside this component since
      // the route does not get rendered until after this component is rendered.
      const match = matchPath(location.pathname, {
        path,
        exact
      })
      if (match === null) throw new Error(`Expecting a match for path - ${path} - but found none.`)

      return (
        <ErrorBoundary fallback={<div>There was an Error</div>}>
          <Suspense fallback={<ClipLoader size={150} />}>
            {prepare === undefined ? <Component /> : <Component preloadedQuery={prepare(match.params)}/>}
          </Suspense>
        </ErrorBoundary>
      )
    }} />
  )
}

export default Route
