/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type relaySubGameSessionByIdQueryVariables = {
    id: string;
};
export type relaySubGameSessionByIdQueryResponse = {
    readonly subGameSessionById: {
        readonly subGameSession: {
            readonly id: string;
            readonly isSubOnly: boolean;
            readonly maxActivePlayers: number;
        } | null;
    };
};
export type relaySubGameSessionByIdQuery = {
    readonly response: relaySubGameSessionByIdQueryResponse;
    readonly variables: relaySubGameSessionByIdQueryVariables;
};



/*
query relaySubGameSessionByIdQuery(
  $id: ID!
) {
  subGameSessionById(input: {id: $id}) {
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
    "name": "id"
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
            "variableName": "id"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "SubGameSessionByIdPayload",
    "kind": "LinkedField",
    "name": "subGameSessionById",
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
    "name": "relaySubGameSessionByIdQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "relaySubGameSessionByIdQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "bb93ba58681a3f139b301d3899bd3236",
    "id": null,
    "metadata": {},
    "name": "relaySubGameSessionByIdQuery",
    "operationKind": "query",
    "text": "query relaySubGameSessionByIdQuery(\n  $id: ID!\n) {\n  subGameSessionById(input: {id: $id}) {\n    subGameSession {\n      id\n      isSubOnly\n      maxActivePlayers\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f214204cc3a41589bf821f057c343aaf';
export default node;
