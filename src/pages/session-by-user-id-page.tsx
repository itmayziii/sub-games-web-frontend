import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { PreloadedQuery, usePreloadedQuery } from 'react-relay'
import { relaySubGameSessionByUserIdQuery } from '../__generated__/relaySubGameSessionByUserIdQuery.graphql'
import { SubGameSessionByUserIdQuery } from '../relay'
import ErrorBoundary, { ErrorComponentProps } from '../components/errors/error-boundary'
import ROUTES from '../routes'
import Button from '../components/button'
import { useRecoilState } from 'recoil'
import { UserState, userStateAtom } from '../recoil/atoms/user'
import GenericErrorPage from '../components/errors/generic-error-page'
import UserNotSignedUpErrorPage from '../components/errors/user-not-signed-up-error-page'

interface SessionByUserIdPageProps {
  preloadedQuery?: PreloadedQuery<relaySubGameSessionByUserIdQuery>
}
function SubGameSessionPage ({ preloadedQuery }: SessionByUserIdPageProps): React.ReactElement {
  if (preloadedQuery === undefined) throw new Error('SessionByUserIdPage component requires a preloaded query.')
  const data = usePreloadedQuery<relaySubGameSessionByUserIdQuery>(SubGameSessionByUserIdQuery, preloadedQuery)
  const { userId } = useParams<{ userId: string }>()
  const [user] = useRecoilState<UserState>(userStateAtom)

  if (user === null || user === undefined) throw new Error('SubGameSessionPage requires user.')

  if (data.activeSubGameSessionByUserId.subGameSession === null) {
    return (<NoSubGameSession loggedInUserId={user.sub} userId={userId} />)
  }

  return (
    <div>home page - {data.activeSubGameSessionByUserId.subGameSession?.id}</div>
  )
}

interface NoSubGameSessionProps {
  loggedInUserId: string
  userId: string
}
function NoSubGameSession ({ loggedInUserId, userId }: NoSubGameSessionProps): React.ReactElement {
  const isUsersStream = loggedInUserId === userId
  return (
    <div className='flex flex-col justify-center items-center pt-20'>
      <h1 className='text-4xl md:text-6xl'>{isUsersStream ? 'Welcome!' : 'No Sub Games'}</h1>
      <h2 className='text-lg md:text-2xl mt-2 mx-2 text-center'>
        {isUsersStream ? 'You have' : `User "${userId}" has`} never started a sub game.
      </h2>
      { !isUsersStream && <Button to={ROUTES.sessions} className='mt-4 mx-2 px-4 py-2' component={Link}>Go to Sub Games</Button>}
    </div>
  )
}

function SubGameSessionErrorPage ({ graphQLErrors }: ErrorComponentProps): React.ReactElement {
  if (graphQLErrors === null) {
    return <GenericErrorPage />
  }

  if (graphQLErrors[0] === undefined || graphQLErrors[0].extensions.code !== 'BAD_USER_INPUT') {
    return <GenericErrorPage />
  }

  return <UserNotSignedUpErrorPage />
}

export default function SessionByUserIdPage ({ preloadedQuery }: SessionByUserIdPageProps): React.ReactElement {
  return (
    <ErrorBoundary key={preloadedQuery?.variables?.userId} fallback={SubGameSessionErrorPage}>
      <SubGameSessionPage preloadedQuery={preloadedQuery} />
    </ErrorBoundary>
  )
}
