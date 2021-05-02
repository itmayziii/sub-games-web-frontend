import React from 'react'
import PersonIcon from '@material-ui/icons/Person'
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset'
import SettingsIcon from '@material-ui/icons/Settings'
import { SvgIcon } from '@material-ui/core'
import { Link, matchPath, useLocation, generatePath } from 'react-router-dom'
import ROUTES from '../../routes'
import cn from 'classnames'
import styles from './bottom-nav.module.css'
import { useRecoilValue } from 'recoil'
import { UserState, userStateAtom } from '../../recoil/atoms/user'

interface ItemProps {
  icon: typeof SvgIcon
  name: string
  to: string
}
function Item ({ icon: Icon, name, to }: ItemProps): React.ReactElement {
  const location = useLocation()
  const match = matchPath(location.pathname, { path: to, exact: true })
  const isActive = match !== null
  return (
    <Link
      to={to}
      className='flex flex-col items-center w-full justify-center'>
      <Icon classes={{ root: isActive ? 'text-white' : 'text-secondary' }} />
      <span className={cn(styles.label, { 'text-white': isActive, 'text-secondary': !isActive })}>{name}</span>
    </Link>
  )
}

/**
 * The Material UI bottom nav sucked, it was very hard to customize, honestly easier to just write this simple component.
 */
export default function BottomNav (): React.ReactElement {
  const user = useRecoilValue<UserState>(userStateAtom)
  if (user === null) throw new Error('Bottom nav requires user.')

  return (
    <nav className='fixed bottom-0 left-0 bg-primary w-full h-14 flex justify-center'>
      <div className='flex justify-between max-w-4xl w-full'>
        <Item icon={PersonIcon} name='My Stream' to={generatePath(ROUTES.userIdSession, { userId: user?.sub })} />
        <Item icon={VideogameAssetIcon} name='Sub Games' to={ROUTES.sessions} />
        <Item icon={SettingsIcon} name='Settings' to={ROUTES.settings} />
      </div>
    </nav>
  )
}
