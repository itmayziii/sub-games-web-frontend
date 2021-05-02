import React from 'react'
import { PreloadedQuery, usePreloadedQuery } from 'react-relay'
import { relaySessionsByUserIdQuery } from '../__generated__/relaySessionsByUserIdQuery.graphql'
import { SessionsByUserIdQuery } from '../relay'
import cn from 'classnames'
import SessionCard from '../components/session-card'

interface SessionsPageProps {
  preloadedQuery?: PreloadedQuery<relaySessionsByUserIdQuery>
}
export default function SessionsPage ({ preloadedQuery }: SessionsPageProps): React.ReactElement {
  if (preloadedQuery === undefined) throw new Error('SessionsPage component requires a preloaded query.')
  const { sessionsByUserId } = usePreloadedQuery<relaySessionsByUserIdQuery>(SessionsByUserIdQuery, preloadedQuery)
  return (
    <ul className='flex justify-center flex-wrap'>
      {sessionsByUserId.edges.map((session, index) => {
        const isLast = index === sessionsByUserId.edges.length - 1
        const className = cn({ 'mb-4': isLast })
        return (
          <SessionCard key={session.node.id} className={className} session={session} />
        )
      })}
    </ul>
  )
}
