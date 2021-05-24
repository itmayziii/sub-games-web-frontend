/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
/* @relayHash db54de61900f6f1f8da29d8acd2a3128 */

import { ConcreteRequest } from "relay-runtime";
export type relaySubGameSessionByUserIdQueryVariables = {
    userId: string;
};
export type relaySubGameSessionByUserIdQueryResponse = {
    readonly activeSubGameSessionByUserId: {
        readonly subGameSession: {
            readonly id: string;
            readonly isSubOnly: boolean;
            readonly maxActivePlayers: number;
        } | null;
    };
};
export type relaySubGameSessionByUserIdQuery = {
    readonly response: relaySubGameSessionByUserIdQueryResponse;
    readonly variables: relaySubGameSessionByUserIdQueryVariables;
};



/*
query relaySubGameSessionByUserIdQuery(
  $userId: ID!
) {
  activeSubGameSessionByUserId(input: {userId: $userId}) {
    subGameSession {
      id
      isSubOnly
      maxActivePlayers
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
v1 = [
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
    "concreteType": "ActiveSubGameSessionByUserIdPayload",
    "kind": "LinkedField",
    "name": "activeSubGameSessionByUserId",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "SubGameSession",
        "kind": "LinkedField",
        "name": "subGameSession",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isSubOnly",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "maxActivePlayers",
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
    "name": "relaySubGameSessionByUserIdQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "relaySubGameSessionByUserIdQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "db54de61900f6f1f8da29d8acd2a3128",
    "metadata": {},
    "name": "relaySubGameSessionByUserIdQuery",
    "operationKind": "query",
    "text": null
  }
};
})();
(node as any).hash = 'fe856734574fd9aeb7680a281655bc5b';
export default node;
