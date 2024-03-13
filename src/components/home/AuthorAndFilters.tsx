import React from 'react'
import { AnimatedTooltip } from '../ui/AnimatedToolTip'
import { mockItems2 } from '@/utils/constants'
import { useQuoteStore } from '@/store/useQuoteStore'
import { convertDateToString } from '@/utils/textFormat'
import useGetQuotes from '@/hooks/useGetQuotes'
import { IToolTip } from '../interfaces/quoteInterface'
import { getAvatarPath } from '@/utils/getAvatars'

export default function AuthorAndFilters() {
  const {page,filteredAuthors,selectedDate,} = useQuoteStore()
  const {filteredData} = useGetQuotes()

  //a new Array to hold authors in page tool tip
  const authorArray:IToolTip[] =[]

    filteredData.map((quote,key)=>{
      if(authorArray.length<=8){
        const isPresent = authorArray.some((item=>item.name === quote.author))
        if(!isPresent){
          authorArray.push(
            {name:quote.author,id:key+1,designation:"Author",image:getAvatarPath(quote.author.charAt(0))})
        }}
      })

    const filteredDate = convertDateToString(selectedDate)

  return (
    <div className='mt-1'>
        <h3 className="font-semibold">Filters</h3>
        <div className="flex-center">
            <h3 className='flex-center'>
                <span>Page :</span>
                <span className='ml-1 font-semibold'>{page}</span>
            </h3>
            <span className="h-4 mx-5 bg-fade rounded-sm w-[2px]"></span>
            <h3 className='flex-center'>
                <span>Author :</span>
                <span className='ml-1 font-semibold'>{filteredAuthors.length>0?`${filteredAuthors.length} Exlcuded`:`All`}</span>
            </h3>
            <span className="h-4 mx-5 bg-fade rounded-sm w-[2px]"></span>
            <h3 className="">
                <span>Date :</span>
                <span className='ml-1 font-semibold'>{filteredDate}</span>
            </h3>
        </div>
        <h3 className="mt-5">
            <span className='font-semibold'>Authors on this page</span>
        </h3>
        <div className="flex-center mt-2">
          <AnimatedTooltip items={authorArray}/>
      </div>
    </div>
  )
}
