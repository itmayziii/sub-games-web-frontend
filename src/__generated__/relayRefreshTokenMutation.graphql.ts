/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type relayRefreshTokenMutationVariables = {};
export type relayRefreshTokenMutationResponse = {
    readonly refreshToken: {
        readonly success: boolean;
    };
};
export type relayRefreshTokenMutation = {
    readonly response: relayRefreshTokenMutationResponse;
    readonly variables: relayRefreshTokenMutationVariables;
};



/*
mutation relayRefreshTokenMutation {
  refreshToken {
    success
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "RefreshTokenPayload",
    "kind": "LinkedField",
    "name": "refreshToken",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "relayRefreshTokenMutation",
    "selections": (v0/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "relayRefreshTokenMutation",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "30035d1d3781872378dc3980bd2231fa",
    "id": null,
    "metadata": {},
    "name": "relayRefreshTokenMutation",
    "operationKind": "mutation",
    "text": "mutation relayRefreshTokenMutation {\n  refreshToken {\n    success\n  }\n}\n"
  }
};
})();
(node as any).hash = '6bcc1cce380d36907c9d5e2e685b8f6a';
export default node;
