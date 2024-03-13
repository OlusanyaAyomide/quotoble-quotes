import React from 'react'
import LayOut from '../layout/LayOut'
import QuoteFilters from '../home/QuoteFilters'
import AuthorAndFilters from '../home/AuthorAndFilters'
import Pagination from '../home/Pagination'
import SortData from '../home/SortData'
import GetAllQuotes from '../home/GetAllQuotes'


export default function Home() {


  return (
    <LayOut>
      <div className='flex pt-1 pb-10'>
          <div className="w-full lg:w-8/12">
            <h3 className="text-fade justify-between font-semibold text-xl sm:text-[22px] md:text-2xl">Welcome Back</h3>
            <SortData className='sm:hidden -ml-2'/>
            <div className="flex-center">
              <AuthorAndFilters/>
              <SortData className='max-sm:hidden'/>
            </div>
            <GetAllQuotes/>
            <Pagination/>
          </div>
          <div className="w-4/12 px-2 flex-1 max-lg:hidden relative">
          <div className='sticky min-h-[80vh] pt-14 top-0 left-0 w-full'>
                <div>
                  <QuoteFilters/>
                </div>
              </div>
          </div>
      </div>
    </LayOut>
  )
}
