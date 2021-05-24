/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
/* @relayHash c45daad5b94b99226ced67d1c0f9728f */

import { ConcreteRequest } from "relay-runtime";
export type relaySessionsByUserIdQueryVariables = {
    userId: string;
};
export type relaySessionsByUserIdQueryResponse = {
    readonly sessionsByUserId: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly subGameSession: {
                    readonly id: string;
                    readonly isActive: boolean;
                } | null;
                readonly twitchSession: {
                    readonly gameName: string;
                    readonly thumbnailURL: string;
                    readonly user: {
                        readonly id: string;
                        readonly username: string;
                    };
                    readonly viewerCount: number;
                };
            };
        }>;
    };
};
export type relaySessionsByUserIdQuery = {
    readonly response: relaySessionsByUserIdQueryResponse;
    readonly variables: relaySessionsByUserIdQueryVariables;
};



/*
query relaySessionsByUserIdQuery(
  $userId: ID!
) {
  sessionsByUserId(input: {userId: $userId}) {
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "userId",
            "variableName": "userId"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "SessionsConnection",
    "kind": "LinkedField",
    "name": "sessionsByUserId",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "SessionEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Session",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "SubGameSession",
                "kind": "LinkedField",
                "name": "subGameSession",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isActive",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "TwitchSession",
                "kind": "LinkedField",
                "name": "twitchSession",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "gameName",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "thumbnailURL",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "username",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "viewerCount",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "relaySessionsByUserIdQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "relaySessionsByUserIdQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "id": "c45daad5b94b99226ced67d1c0f9728f",
    "metadata": {},
    "name": "relaySessionsByUserIdQuery",
    "operationKind": "query",
    "text": null
  }
};
})();
(node as any).hash = '7c1c66a72b5e764a6ce43c330c4178f7';
export default node;
