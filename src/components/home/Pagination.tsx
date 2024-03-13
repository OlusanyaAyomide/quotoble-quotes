import useGetQuotes from '@/hooks/useGetQuotes'
import { useQuoteStore } from '@/store/useQuoteStore'
import { Icons } from '@/utils/Icons'
import React, { useEffect, useState } from 'react'

export default function Pagination() {
    const {page,NextPage,PreviousPage} = useQuoteStore()
    const {filteredData} = useGetQuotes()

    useEffect(()=>{
        if(filteredData.length <= 10 ){
            window.scrollTo({
                top: filteredData.length * 25,
                behavior: "smooth"
            })
        }
    },[filteredData])
    return ( 
    <div className='mt-4 flex-center justify-center w-fit mx-auto'>
        <button onClick={PreviousPage} disabled={page<=1} className="bg-main hover:brightness-110 rounded-full shadow-sm disabled:bg-primary/50 h-7 w-7 grid place-content-center">
            <Icons.rightArrow className='text-white text-2xl rotate-180' />
        </button>
        <span className='font-semibold mx-6'>{page}</span>
        <button onClick={()=>{
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            NextPage()}} 
            className="bg-main hover:brightness-110 rounded-full shadow-sm h-7 w-7 grid place-content-center">
            <Icons.rightArrow className='text-white text-2xl' />
        </button>
    </div>
  )
}
