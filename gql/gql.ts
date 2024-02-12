/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nquery GetallTweets{\n    gettweets{\n    id\n    content\n    imageurl\n    author {\n      firstname\n      profileimgurl\n    }\n  }\n}\n\n": types.GetallTweetsDocument,
    "#graphql\nquery  Verifygoogletoken($token:String!){\n    verifyGoogletoken(token: $token)\n}": types.VerifygoogletokenDocument,
    "\nquery GetCurrentuser{\n    getCurrentuser {\n    id\n    email\n    profileimgurl\n    firstname\n    lastname\n  }\n}\n\n": types.GetCurrentuserDocument,
    "\nmutation Mutation($payload: createTweet!) {\n  createTweet(payload: $payload) {\n    id\n    content\n  \n  }\n}\n": types.MutationDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GetallTweets{\n    gettweets{\n    id\n    content\n    imageurl\n    author {\n      firstname\n      profileimgurl\n    }\n  }\n}\n\n"): (typeof documents)["\nquery GetallTweets{\n    gettweets{\n    id\n    content\n    imageurl\n    author {\n      firstname\n      profileimgurl\n    }\n  }\n}\n\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\nquery  Verifygoogletoken($token:String!){\n    verifyGoogletoken(token: $token)\n}"): (typeof documents)["#graphql\nquery  Verifygoogletoken($token:String!){\n    verifyGoogletoken(token: $token)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GetCurrentuser{\n    getCurrentuser {\n    id\n    email\n    profileimgurl\n    firstname\n    lastname\n  }\n}\n\n"): (typeof documents)["\nquery GetCurrentuser{\n    getCurrentuser {\n    id\n    email\n    profileimgurl\n    firstname\n    lastname\n  }\n}\n\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation Mutation($payload: createTweet!) {\n  createTweet(payload: $payload) {\n    id\n    content\n  \n  }\n}\n"): (typeof documents)["\nmutation Mutation($payload: createTweet!) {\n  createTweet(payload: $payload) {\n    id\n    content\n  \n  }\n}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;