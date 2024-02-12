import { graphqlclient } from "@/clients/api"
import { CreateTweet } from "@/gql/graphql";
import { gettweet } from "@/graphql/query/tweet";

import { Createpost} from "@/mutation/tweet";


import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast";
export const useCreattweet=()=>{
    const quertclient=useQueryClient();
    const mutation=useMutation({
        mutationFn:(payload:CreateTweet)=>
        graphqlclient.request(Createpost,{payload}),
        onMutate:()=>toast.loading("Creating tweet...",{id:"1"}),
        onSuccess:async ()=>{
           await  quertclient.invalidateQueries(["all-tweet"])
           toast.success("Created Success",{id:"1"})
        }
    })
    return mutation;
}
export const useGetallTweet=()=>{
    const query=useQuery({
        queryKey:["all-tweet"],
        queryFn:()=>graphqlclient.request(gettweet)
    })

    return {...query,tweets:query.data?.gettweets};
}