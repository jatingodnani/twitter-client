import { graphql } from "@/gql";

export const Createpost=graphql(`
mutation Mutation($payload: createTweet!) {
  createTweet(payload: $payload) {
    id
    content
  
  }
}
`)