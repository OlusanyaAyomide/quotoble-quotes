import { useQuery } from '@tanstack/react-query'
import { useQuoteStore } from '@/store/useQuoteStore'
import request from './request/request'
import { AxiosResponse } from 'axios'
import { IQuoteListData } from '@/components/interfaces/quoteInterface'
import {  useMemo } from 'react'
import { IQuote } from '@/components/interfaces/quoteInterface'


const getQuotes =({url}:{url:string})=>{
    const  promise = request.get(url) as Promise<AxiosResponse<IQuoteListData>>
    return promise
}

export default function useGetQuotes (){
    //pulls in page from global state
    const {page,filteredAuthors,selectedDate,sortBy} = useQuoteStore()
    const staleTime = 1000*60*10

    //data is refetched is page changes
    const {data,isError,isLoading,isSuccess,isFetching} = useQuery({queryKey:["quotes",`page-${page}`],  refetchInterval:0,staleTime,
            queryFn:()=>{
                return getQuotes({url:`/quotes?page=${page}&limit=${60}`})   
            },
    })

    //filters data if any of the filtered parameter has changed
    const filteredData = useMemo(()=>{

        if (data?.data){
            let finalData:IQuote[] = data.data.results
            //if any author has been added to be filtered, they are excluded from the final end data
            if (filteredAuthors.length>0){
                finalData = data.data.results.filter((quote)=>{return !filteredAuthors.includes(quote.author)})
            }

            //filter the data such that only quotes with chosen date is rerurned
            if(selectedDate){
               finalData = finalData.filter((quote)=>{
                    const quoteDate = new Date(quote.dateAdded)
                    const filteredDate  = new Date(selectedDate)
                    return quoteDate.getDate() === filteredDate.getDate()   
               })
            }
            //sort quotes if it not set as default
            if(sortBy !== "Default"){
                if(sortBy === "Author"){
                    // Convert author names to lowercase for case-insensitive comparison
                    finalData = finalData.slice().sort((a,b)=>{
                    const authorA = a.author.toLowerCase()
                    const authorB = b.author.toLowerCase()
                        
                    // Compare author names
                    if (authorA < authorB) return -1;
                    if (authorA > authorB) return 1;
                    return 0;
                    })
                }
                else{
                    // Convert author names to lowercase for case-insensitive comparison
                    finalData = finalData.slice().sort((a,b)=>{
                        const IdA = a._id.toLowerCase()
                        const IdB = b._id.toLowerCase()
                            
                        // Compare author names
                        if (IdA < IdB) return -1;
                        if (IdA > IdB) return 1;
                        return 0;
                        })
                }
            }
            return finalData
        }
        else{
            return []
        }

    },[filteredAuthors,data,selectedDate,sortBy])
    //dependecy array that trigggers Refiltering or sorting if data is changed
     
    
    return {data,isSuccess,isError,isLoading,isFetching,filteredData}
}