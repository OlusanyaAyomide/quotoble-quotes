import React from 'react'
import QuoteCards from '../home/QuoteCards'
import { mockItems3 } from '@/utils/constants'
import useGetQuotes from '@/hooks/useGetQuotes'
import Loading from '../layout/Loading'
import Error from '../layout/Error'
//Get All quotes is abstracted to it's component to prevent rerender of the home page if the data in useGetQuotes has changed

export default function GetAllQuotes() {
    const {filteredData,isLoading,isError,isFetching,isSuccess} = useGetQuotes()
     return (
    <div className="mt-4">
        {isSuccess?
            // <Loading/> 
            <QuoteCards data={filteredData}/>
            :(isLoading || isFetching)?<Loading className='h-[80vh]'/>:
                <Error/>
            }
    </div>
  )
}
