/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  createTweet?: Maybe<Tweet>;
};


export type MutationCreateTweetArgs = {
  payload: CreateTweet;
};

export type Query = {
  __typename?: 'Query';
  getCurrentuser?: Maybe<User>;
  gettweets?: Maybe<Array<Maybe<Tweet>>>;
  verifyGoogletoken: Scalars['String']['output'];
};


export type QueryVerifyGoogletokenArgs = {
  token: Scalars['String']['input'];
};

export type Tweet = {
  __typename?: 'Tweet';
  author?: Maybe<User>;
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  imageurl?: Maybe<Scalars['String']['output']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  firstname: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastname?: Maybe<Scalars['String']['output']>;
  profileimgurl?: Maybe<Scalars['String']['output']>;
  tweet?: Maybe<Array<Maybe<Tweet>>>;
};

export type CreateTweet = {
  content: Scalars['String']['input'];
  imageurl?: InputMaybe<Scalars['String']['input']>;
};

export type GetallTweetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetallTweetsQuery = { __typename?: 'Query', gettweets?: Array<{ __typename?: 'Tweet', id: string, content: string, imageurl?: string | null, author?: { __typename?: 'User', firstname: string, profileimgurl?: string | null } | null } | null> | null };

export type VerifygoogletokenQueryVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type VerifygoogletokenQuery = { __typename?: 'Query', verifyGoogletoken: string };

export type GetCurrentuserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentuserQuery = { __typename?: 'Query', getCurrentuser?: { __typename?: 'User', id: string, email: string, profileimgurl?: string | null, firstname: string, lastname?: string | null } | null };

export type MutationMutationVariables = Exact<{
  payload: CreateTweet;
}>;


export type MutationMutation = { __typename?: 'Mutation', createTweet?: { __typename?: 'Tweet', id: string, content: string } | null };


export const GetallTweetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetallTweets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gettweets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"imageurl"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"profileimgurl"}}]}}]}}]}}]} as unknown as DocumentNode<GetallTweetsQuery, GetallTweetsQueryVariables>;
export const VerifygoogletokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Verifygoogletoken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyGoogletoken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}]}]}}]} as unknown as DocumentNode<VerifygoogletokenQuery, VerifygoogletokenQueryVariables>;
export const GetCurrentuserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrentuser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCurrentuser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profileimgurl"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}}]}}]}}]} as unknown as DocumentNode<GetCurrentuserQuery, GetCurrentuserQueryVariables>;
export const MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"createTweet"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTweet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<MutationMutation, MutationMutationVariables>;