import { graphql } from "../../gql"

export const gettweet=graphql(`
query GetallTweets{
    gettweets{
    id
    content
    imageurl
    author {
      firstname
      profileimgurl
    }
  }
}

`)


