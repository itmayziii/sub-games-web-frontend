import React from 'react'
import PersonIcon from '@material-ui/icons/Person'
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset'
import SettingsIcon from '@material-ui/icons/Settings'
import { SvgIcon } from '@material-ui/core'
import { Link, matchPath, useLocation } from 'react-router-dom'
import ROUTES from '../../routes'
import cn from 'classnames'
import styles from './bottom-nav.module.css'

interface ItemProps {
  icon: typeof SvgIcon
  name: string
  to: string
}
const Item: React.FC<ItemProps> = function Item ({ icon: Icon, name, to }) {
  const location = useLocation()
  const match = matchPath(location.pathname, to)
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

const BottomNav: React.FC = function BottomNav () {
  return (
    <nav className='fixed bottom-0 left-0 bg-primary w-full h-14 flex justify-between'>
      <Item icon={PersonIcon} name='My Stream' to={ROUTES.login} />
      <Item icon={VideogameAssetIcon} name='Sub Games' to={ROUTES.sessions} />
      <Item icon={SettingsIcon} name='Settings' to={ROUTES.settings} />
    </nav>
  )
}

export default BottomNav
