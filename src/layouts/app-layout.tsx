import React from 'react'
import BottomNav from '../components/nav/bottom-nav'

interface AppLayoutProps {
  children: React.ReactNode
  currentPath: string
}
export default function AppLayout ({ children, currentPath }: AppLayoutProps): React.ReactElement {
  return (
    <div className='pb-14 min-h-full'>
      {children}
      <BottomNav currentPath={currentPath} />
    </div>
  )
}
