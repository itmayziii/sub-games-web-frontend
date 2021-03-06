import React, { ComponentType, Suspense } from 'react'
import { Route as RouteComponent, Redirect } from 'react-router-dom'
import { PreloadedQuery } from 'react-relay'
import ClipLoader from 'react-spinners/ClipLoader'
import ErrorBoundary from './errors/error-boundary'
import { useRecoilState } from 'recoil'
import { UserState, userStateAtom } from '../recoil/atoms/user'
import ROUTES from '../routes'
import AppLayout from '../layouts/app-layout'
import { ThemeState, themeStateAtom } from '../recoil/atoms/theme'
import GenericErrorPage from './errors/generic-error-page'

interface RouteProps {
  component: ComponentType<{ preloadedQuery?: PreloadedQuery<any> }>
  layout?: ComponentType<{ currentPath: string, children: React.ReactNode }>
  path: string
  exact?: boolean
  prepare?: (routeParams?: { [key: string]: string | undefined }) => PreloadedQuery<any>
  requiresAuth?: boolean
}

function Loader (): React.ReactElement {
  const [theme] = useRecoilState<ThemeState>(themeStateAtom)

  return (
    <div className='flex justify-center items-center mt-20'>
      <ClipLoader color={theme.colors.primary.DEFAULT} size={150} />
    </div>
  )
}

export default function Route ({
  component: Component,
  layout: Layout = AppLayout,
  path,
  exact = true,
  prepare,
  requiresAuth = true
}: RouteProps): React.ReactElement {
  const [user] = useRecoilState<UserState>(userStateAtom)

  if (user === null && requiresAuth) {
    return <Redirect exact={exact} from={path} to={`${ROUTES.login}?redirect_url=${window.location.href}`} />
  }

  return (
    <RouteComponent path={path} exact={exact} render={(routeProps) => {
      return (
        <Layout currentPath={path} >
          <ErrorBoundary fallback={GenericErrorPage}>
            <Suspense fallback={<Loader />}>
              {prepare === undefined ? <Component /> : <Component preloadedQuery={prepare(routeProps.match.params)}/>}
            </Suspense>
          </ErrorBoundary>
        </Layout>
      )
    }} />
  )
}
