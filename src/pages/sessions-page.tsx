import React from 'react'
import { PreloadedQuery, usePreloadedQuery } from 'react-relay'
import { relaySessionsByUserIdQuery } from '../__generated__/relaySessionsByUserIdQuery.graphql'
import { SessionsByUserIdQuery } from '../relay'
import cn from 'classnames'
import VisibilityIcon from '@material-ui/icons/Visibility'
import styles from './sessions-page.module.css'

interface SessionsPageProps {
  preloadedQuery?: PreloadedQuery<relaySessionsByUserIdQuery>
}
const SessionsPage: React.FC<SessionsPageProps> = function SessionsPage ({ preloadedQuery }) {
  if (preloadedQuery === undefined) throw new Error('SessionsPage component requires a preloaded query.')
  const { sessionsByUserId } = usePreloadedQuery<relaySessionsByUserIdQuery>(SessionsByUserIdQuery, preloadedQuery)
  return (
    <ul className='flex justify-center flex-wrap'>
      {sessionsByUserId.edges.map((session, index) => {
        if (session.node.twitchSession === null) return null
        const isLast = index === sessionsByUserId.edges.length - 1
        const image = session.node.twitchSession.thumbnailURL.replace('{width}', '350').replace('{height}', '197')
        const hasActiveSession = session.node.subGameSession !== null
        return (
          <li
            className={cn(
              styles.card,
              { 'mb-4': isLast }
            )}
            key={session.node.id}
          >
            <figure className={styles.imageWrapper}>
              <img className='absolute inset-0 w-full' src={image} alt='twitch gameplay thumbnail' />
            </figure>
            <div className='p-1 w-full'>
              <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                  <h3 className='text-xl font-bold'>{session.node.twitchSession.username}</h3>
                  <span className={cn('ml-1', { [styles.dot]: hasActiveSession, [styles.inactiveDot]: !hasActiveSession })} />
                </div>
                <div className='flex items-center'>
                  {session.node.twitchSession.viewerCount}
                  <VisibilityIcon className='ml-1' />
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default SessionsPage
