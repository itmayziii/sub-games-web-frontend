import React from 'react'

interface ErrorBoundaryProps {
  fallback: React.ReactNode
  children: React.ReactNode
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, any> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError (error: Error): { error: Error } {
    return { error }
  }

  render (): React.ReactNode {
    if (this.state.error === null) return this.props.children

    return this.props.fallback
  }
}
