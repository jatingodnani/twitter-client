import { graphql } from "../../gql"

export const verifygoogletokenquery=graphql(`#graphql
query  Verifygoogletoken($token:String!){
    verifyGoogletoken(token: $token)
}`)

export const getCurrentQueryuser=graphql(`
query GetCurrentuser{
    getCurrentuser {
    id
    email
    profileimgurl
    firstname
    lastname
  }
}

`)