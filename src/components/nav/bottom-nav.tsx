import React, { useState, useEffect } from 'react'
import PersonIcon from '@material-ui/icons/Person'
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset'
import SettingsIcon from '@material-ui/icons/Settings'
import { SvgIcon } from '@material-ui/core'
import { Link, generatePath, matchPath } from 'react-router-dom'
import ROUTES from '../../routes'
import cn from 'classnames'
import styles from './bottom-nav.module.css'
import { useRecoilValue } from 'recoil'
import { UserState, userStateAtom } from '../../recoil/atoms/user'

interface ItemProps {
  icon: typeof SvgIcon
  name: string
  to: string
  currentPath: string
}
function Item ({ icon: Icon, name, to, currentPath }: ItemProps): React.ReactElement {
  const [isRippling, setIsRippling] = useState<boolean>(false)
  const [coords, setCoords] = useState<{ x: number, y: number }>({ x: -1, y: -1 })
  const match = matchPath(to, { path: currentPath, exact: true })
  const isActive = match !== null

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true)
      setTimeout(() => setIsRippling(false), 300)
      return
    }

    setIsRippling(false)
  }, [coords])

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 })
  }, [isRippling])

  return (
    <Link
      to={to}
      onClick={(event) => {
        // @ts-expect-error
        const rect = event.target.getBoundingClientRect()
        setCoords({ x: event.clientX - rect.left, y: event.clientY - rect.top })
      }}
      className={cn(
        'flex flex-col items-center w-full justify-center relative overflow-hidden',
        { 'text-on-primary': isActive, 'text-primary-100': !isActive }
      )}>
      <Icon className={cn('pointer-events-none', { 'text-on-primary': isActive, 'text-primary-100': !isActive })} />
      <span className={styles.label}>{name}</span>
      {isRippling && (
        <span className={styles.ripple} style={{ left: coords.x, top: coords.y }} />
      )}
    </Link>
  )
}

interface BottomNavProps {
  currentPath: string
}
/**
 * The Material UI bottom nav sucked, it was very hard to customize, honestly easier to just write this simple component.
 */
export default function BottomNav ({ currentPath }: BottomNavProps): React.ReactElement {
  const user = useRecoilValue<UserState>(userStateAtom)
  if (user === null || user === undefined) throw new Error('Bottom nav requires user.')

  return (
    <nav className='fixed bottom-0 left-0 bg-primary w-full h-14 flex justify-center'>
      <div className='flex justify-between max-w-4xl w-full'>
        <Item icon={PersonIcon} name='My Stream' to={generatePath(ROUTES.userIdSession, { userId: user.sub })} currentPath={currentPath} />
        <Item icon={VideogameAssetIcon} name='Sub Games' to={ROUTES.sessions} currentPath={currentPath} />
        <Item icon={SettingsIcon} name='Settings' to={ROUTES.settings} currentPath={currentPath} />
      </div>
    </nav>
  )
}
