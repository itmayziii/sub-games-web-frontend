import React from 'react'
import { Link, generatePath } from 'react-router-dom'
import cn from 'classnames'
import styles from './session-card.module.css'
import VisibilityIcon from '@material-ui/icons/Visibility'
import { relaySessionsByUserIdQuery } from '../__generated__/relaySessionsByUserIdQuery.graphql'
import ROUTES from '../routes'

interface SessionCardProps {
  className?: string
  session: relaySessionsByUserIdQuery['response']['sessionsByUserId']['edges'][number]
}
export default function SessionCard ({ className, session }: SessionCardProps): React.ReactElement {
  const image = session.node.twitchSession.thumbnailURL.replace('{width}', '350').replace('{height}', '197')
  const hasActiveSession = session.node.subGameSession !== null && !session.node.subGameSession.isActive
  return (
    <li
      className={cn(styles.card, className)}
      key={session.node.id}
    >
      <Link to={generatePath(ROUTES.userIdSession, { userId: session.node.twitchSession.user.id })}>
        <figure className={styles.imageWrapper}>
          <img className={cn(styles.img, { [styles.inactiveImg]: !hasActiveSession })} src={image} alt='twitch gameplay thumbnail' />
        </figure>
        <div className='p-1 w-full'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center w-10/12 mr-1'>
              <h3 className='text-xl font-bold overflow-ellipsis whitespace-nowrap overflow-hidden'>{session.node.twitchSession.user.username}</h3>
            </div>
            <div className='flex items-center'>
              {session.node.twitchSession.viewerCount}
              <VisibilityIcon className='ml-1' />
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
