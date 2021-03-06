import graphql from 'babel-plugin-relay/macro'

export const SubGameSessionByUserIdQuery = graphql`
  query relaySubGameSessionByUserIdQuery($userId: ID!) {
    activeSubGameSessionByUserId(input: { userId: $userId }) {
      subGameSession {
        id
        isSubOnly
        maxActivePlayers
      }
    }
  }
`

export const SessionsByUserIdQuery = graphql`
  query relaySessionsByUserIdQuery($userId: ID!) {
    sessionsByUserId(input: { userId: $userId }) {
      edges {
        node {
          id
          subGameSession {
            id
            isActive
          }
          twitchSession {
            gameName
            thumbnailURL
            user {
              id
              username
            }
            viewerCount
          }
        }
      }
    }
  }
`

export const RefreshTokenMutation = graphql`
  mutation relayRefreshTokenMutation {
    refreshToken {
      success
    }
  }
`
