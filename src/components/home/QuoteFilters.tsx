import React from 'react'
import CustomButton from '../ui-util/CustomButton'
import { Icons } from '@/utils/Icons'
import { Button } from '../ui/button'
import FilterAuthors from './FilterAuthors'
import FilterDates from './FilterDates'
import { useState } from 'react'
export default function QuoteFilters() {
    const [isOpened,setisOpened] = useState<boolean>(false)
  return (
    <>
        <div  className='flex lg:justify-end '>
            <Button onClick={()=>{setisOpened((prev=>!prev))}} className='flex-center bg-main text-background hover:bg-main rounded-lg z-20 hover:brightness-110 ml-auto'>
              <span><Icons.angleDown className={`text-xl mr-2 transition-all duration-300 ${isOpened?"rotate-180":""}`}/></span>
              <span>Filter Authors</span>
            </Button>
          </div>
          <div className={`h-0 overflow-hidden ml-3  transition-all duration-100 px-2 w-full ${isOpened?"h-fit py-2 translate-y-2":""}`}>
            <div className="min-h-[100px] border">
              <FilterAuthors/>
            </div>
          </div>
        <FilterDates/>
    </>

  )
}
