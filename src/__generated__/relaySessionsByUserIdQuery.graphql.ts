/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

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
  sessionsByUserId(input: {id: $userId}) {
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
            "name": "id",
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
    "cacheID": "749a4bc82a0962985975246063518ade",
    "id": null,
    "metadata": {},
    "name": "relaySessionsByUserIdQuery",
    "operationKind": "query",
    "text": "query relaySessionsByUserIdQuery(\n  $userId: ID!\n) {\n  sessionsByUserId(input: {id: $userId}) {\n    edges {\n      node {\n        id\n        subGameSession {\n          id\n          isActive\n        }\n        twitchSession {\n          gameName\n          thumbnailURL\n          user {\n            id\n            username\n          }\n          viewerCount\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '2b8a0bfb07f7912d0a9dd7a8668c4ef8';
export default node;
