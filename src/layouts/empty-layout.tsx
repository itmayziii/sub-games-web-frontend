import React from 'react'

interface EmptyLayoutProps {
  children: React.ReactNode
}
export default function EmptyLayout ({ children }: EmptyLayoutProps): React.ReactElement {
  return (
    <>
      {children}
    </>
  )
}
