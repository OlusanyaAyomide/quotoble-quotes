import React from 'react'
import { Calendar } from "@/components/ui/calendar"
import { useQuoteStore } from '@/store/useQuoteStore'

export default function FilterDates() {

    const date = new Date("2023-04-14")
    const {selectedDate,setSelectedDate} = useQuoteStore()
    return (
    <div className='mt-4 lg:pl-4 pb-10  backdrop-blur-sm'>
        <h3 className="font-medium pl-5 max-lg:justify-center max-lg:mt-10 flex-center">
            <span>Filter</span>
            <span className="mx-5 h-4 bg-fade w-[2px]"></span>
            <span>All</span>
        </h3>
        {/* All quotes are not 2024, dates have restricted to 2023 */}
        <div className="mt-2">
            <Calendar
            mode="single"
            fromYear={2010}
            defaultMonth={date}
            toYear={2023}
            selected={selectedDate}
            onSelect={(d)=>{setSelectedDate(d)}}
            className="rounded-md border max-w-[300px] mx-auto shadow"
    />
        </div>
    </div>
  )
}
