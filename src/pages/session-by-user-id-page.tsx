import React from 'react'
import { PreloadedQuery, usePreloadedQuery } from 'react-relay'
import { relaySubGameSessionByUserIdQuery } from '../__generated__/relaySubGameSessionByUserIdQuery.graphql'
import { SubGameSessionByUserIdQuery } from '../relay'

interface HomePageProps {
  preloadedQuery?: PreloadedQuery<relaySubGameSessionByUserIdQuery>
}

const SessionByUserIdPage: React.FC<HomePageProps> = function HomePage ({ preloadedQuery }) {
  if (preloadedQuery === undefined) throw new Error('SessionByUserIdPage component requires a preloaded query.')
  const data = usePreloadedQuery<relaySubGameSessionByUserIdQuery>(SubGameSessionByUserIdQuery, preloadedQuery)
  console.log(data)
  return (
    <div>home page - {data.activeSubGameSessionByUserId.subGameSession?.id}</div>
  )
}

export default SessionByUserIdPage
