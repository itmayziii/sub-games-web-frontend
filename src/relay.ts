import graphql from 'babel-plugin-relay/macro'

export const SubGameSessionByIdQuery = graphql`
  query relaySubGameSessionByIdQuery($id: ID!) {
    subGameSessionById(input: { id: $id }) {
      subGameSession {
        id
        isSubOnly
        maxActivePlayers
      }
    }
  }
`
