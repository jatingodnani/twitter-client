import { graphqlclient } from "@/clients/api"
import { getCurrentQueryuser } from "@/graphql/query/user"
import { useQuery } from "@tanstack/react-query"




function useCurrentuser() {
  const currentquery=useQuery({
        queryKey:["current-user"],
        queryFn:()=>graphqlclient.request(getCurrentQueryuser)

    })
    return {...currentquery,user:currentquery.data?.getCurrentuser}
}

export default useCurrentuser