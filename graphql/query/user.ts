import { graphql } from "../../gql"

export const verifygoogletokenquery=graphql(`#graphql
query  Verifygoogletoken($token:String!){
    verifyGoogletoken(token: $token)
}`)