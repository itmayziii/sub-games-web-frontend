import React from 'react'
import BottomNav from '../components/nav/bottom-nav'

interface AppLayoutProps {
  children: React.ReactNode
  currentPath: string
}
export default function AppLayout ({ children, currentPath }: AppLayoutProps): React.ReactElement {
  return (
    <>
      {children}
      <BottomNav currentPath={currentPath} />
    </>
  )
}
