import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { PreloadedQuery, usePreloadedQuery } from 'react-relay'
import { relaySubGameSessionByUserIdQuery } from '../__generated__/relaySubGameSessionByUserIdQuery.graphql'
import { SubGameSessionByUserIdQuery } from '../relay'
import ErrorBoundary, { ErrorComponentProps } from '../components/errors/error-boundary'
import ROUTES from '../routes'
import Button from '../components/button'

interface SessionByUserIdPageProps {
  preloadedQuery?: PreloadedQuery<relaySubGameSessionByUserIdQuery>
}

function SubGameSessionPage ({ preloadedQuery }: SessionByUserIdPageProps): React.ReactElement {
  if (preloadedQuery === undefined) throw new Error('SessionByUserIdPage component requires a preloaded query.')
  const data = usePreloadedQuery<relaySubGameSessionByUserIdQuery>(SubGameSessionByUserIdQuery, preloadedQuery)
  const { userId } = useParams<{ userId: string }>()

  if (data.activeSubGameSessionByUserId.subGameSession === null) {
    return (
      <div className='flex flex-col justify-center items-center pt-20'>
        <h1 className='text-4xl md:text-6xl'>No Sub Games</h1>
        <h2 className='text-lg md:text-2xl mt-2 mx-2 text-center'>User "{userId}" has never started a sub game.</h2>
        <Button to={ROUTES.sessions} className='mt-4 mx-2 px-4 py-2' component={Link}>Go to Sub Games</Button>
      </div>
    )
  }

  return (
    <div>home page - {data.activeSubGameSessionByUserId.subGameSession?.id}</div>
  )
}

function GenericError (): React.ReactElement {
  return (
    <div className='flex flex-col justify-center items-center pt-20'>
      <h1 className='text-6xl'>Error</h1>
      <Button to={ROUTES.sessions} className='mt-4 mx-2 px-4 py-2' component={Link}>Go to Sub Games</Button>
    </div>
  )
}

function UserNotSignedUpError (): React.ReactElement {
  const { userId } = useParams<{ userId: string }>()
  return (
    <div className='flex flex-col justify-center items-center pt-20'>
      <h1 className='text-4xl md:text-6xl'>Not Found</h1>
      <h2 className='text-lg md:text-2xl mt-2 mx-2 text-center'>User "{userId}" is not signed up for Sub Games.</h2>
      <Button to={ROUTES.sessions} className='mt-4 mx-2 px-4 py-2' component={Link}>Go to Sub Games</Button>
    </div>
  )
}

function SubGameSessionErrorPage ({ graphQLErrors }: ErrorComponentProps): React.ReactElement {
  if (graphQLErrors === null) {
    return <GenericError />
  }

  if (graphQLErrors[0] === undefined || graphQLErrors[0].extensions.code !== 'BAD_USER_INPUT') {
    return <GenericError />
  }

  return <UserNotSignedUpError />
}

export default function SessionByUserIdPage ({ preloadedQuery }: SessionByUserIdPageProps): React.ReactElement {
  return (
    <ErrorBoundary fallback={SubGameSessionErrorPage}>
      <SubGameSessionPage preloadedQuery={preloadedQuery} />
    </ErrorBoundary>
  )
}
