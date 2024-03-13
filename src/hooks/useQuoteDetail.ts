import { AxiosResponse } from "axios"
import { useQuery } from "@tanstack/react-query"
import request from "./request/request"
import { IQuote } from "@/components/interfaces/quoteInterface"

export function useQuoteDetail ({id}:{id:string | undefined}){
     //fetches detail of a single quote, the query is only made if id is truthy
    return useQuery(
        {refetchInterval:0,queryKey:["detail",id],enabled:!!id,staleTime:600000,
        queryFn:()=>request.get(`/quotes/${id}`) as Promise<AxiosResponse<IQuote>>
        }
        
        )
}