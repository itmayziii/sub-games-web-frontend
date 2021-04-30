/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

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
  activeSubGameSessionByUserId(input: {id: $userId}) {
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
            "name": "id",
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
    "cacheID": "74c09e8c8a070683fa97e9759e6aff09",
    "id": null,
    "metadata": {},
    "name": "relaySubGameSessionByUserIdQuery",
    "operationKind": "query",
    "text": "query relaySubGameSessionByUserIdQuery(\n  $userId: ID!\n) {\n  activeSubGameSessionByUserId(input: {id: $userId}) {\n    subGameSession {\n      id\n      isSubOnly\n      maxActivePlayers\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '2566af24e84461fc59eadd0dc927f601';
export default node;
