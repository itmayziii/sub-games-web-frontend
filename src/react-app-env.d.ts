// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="react-scripts" />
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="react-dom/experimental" />
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="react/experimental" />

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/35707
declare module 'babel-plugin-relay/macro' {
  export { graphql as default } from 'react-relay'
}
