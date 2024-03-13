import React from 'react'
import QuoteCards from '../home/QuoteCards'
import { useQuery } from '@tanstack/react-query'
import { useQuoteDetail } from '@/hooks/useQuoteDetail'
import { useParams } from 'react-router-dom'
import { AxiosResponse } from 'axios'
import { IQuoteListData } from '../interfaces/quoteInterface'
import request from '@/hooks/request/request'
import Loading from '../layout/Loading'

export default function SimilarQuotes() {

  const staleTime = 60 * 1000 * 10
  const {id} = useParams()
  const {data:result} = useQuoteDetail({id})
  //fetch similar quotes only when the quote has been suceesfullt fetched using the enabled keyword
  const {data,isLoading} = useQuery({queryKey:["similar",id],  refetchInterval:0,staleTime,enabled:!!result?.data,
  queryFn:()=>{
      return request.get(`/quotes/?author=${result?.data.author}`) as Promise<AxiosResponse<IQuoteListData>>  
  },
})

  return (
    <div className='-mt-16'>

      {data?.data ? <h3 className="text-center font-semibold mb-3">From This Author</h3> : null}

      {data?.data?
        <QuoteCards data={data.data.results}/>
        :
        isLoading ? <Loading/>:null
    }
      
    </div>
  )
}
