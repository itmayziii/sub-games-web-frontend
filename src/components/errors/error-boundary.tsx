import React, { ComponentType } from 'react'
import { PayloadError } from 'relay-runtime'
import { PayloadExtensions } from 'relay-runtime/lib/network/RelayNetworkTypes'

interface ErrorBoundaryProps {
  fallback: ComponentType<ErrorComponentProps>
  children: React.ReactNode
}
interface ErrorBoundaryState {
  error: Error | null
  graphQLErrors: GraphQLError[] | null
}
export interface ErrorComponentProps {
  error: AnyError
  graphQLErrors: GraphQLError[] | null
}
interface GraphQLError extends PayloadError {
  path: string[]
  extensions: {
    code: string
    argumentName?: string
    resourceType?: string
    resourceId?: string
    reason?: string
  } & PayloadExtensions
}
// Can't seem to find any types from relay that cover this error which is weird
interface AnyError extends Error {
  response?: {
    status: number
    errors: GraphQLError[]
  }
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { error: null, graphQLErrors: null }
  }

  static getDerivedStateFromError (error: AnyError): ErrorBoundaryState {
    if (error.response === undefined) {
      return { error, graphQLErrors: null }
    }

    return { error, graphQLErrors: error.response.errors }
  }

  render (): React.ReactNode {
    if (this.state.error === null) return this.props.children

    const Fallback = this.props.fallback
    return <Fallback error={this.state.error} graphQLErrors={this.state.graphQLErrors} />
  }
}
