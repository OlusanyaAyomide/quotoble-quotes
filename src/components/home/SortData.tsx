import React, { useState } from 'react'
import { Popover, PopoverTrigger,PopoverContent } from '../ui/popover'
import { Icons } from '@/utils/Icons'
import { Checkbox } from '../ui/checkbox'
import { cn } from '@/lib/utils'
import { TSortBy, useQuoteStore } from '@/store/useQuoteStore'


const sortByOptions:TSortBy[]=["Default","Author","Id"]
export default function SortData({className}:{className?:string}) {
    const {sortBy,setSortBy} = useQuoteStore()
    const [isOpen,setIsOpen] = useState(false)
  return (
    <div className={cn('flex-center font-medium mt-2 max-sm:mr-3',className)}>
        <Popover onOpenChange={(V)=>{setIsOpen(V)}}>
            <PopoverTrigger asChild className='ml-2 cursor-pointer'>
                <div className='flex-center'>
                    <span>Sort</span>
                    <Icons.angleDownL className={`${isOpen?"rotate-180":""} text-fade text-sm`}/>
                    <span className="ml-2">{sortBy}</span>
                </div>
            </PopoverTrigger>

            <PopoverContent align='start' className='px-2 w-[150px]  py-3 shadow-md hover:shadow-lg'>
                {sortByOptions.map((item,key)=>(
                    <div key={key} className="flex-center justify-between">
                        <span className='mr-3'>{`${item !=="Default"?"By":""}`}
                        {item}
                        </span>
                        <Checkbox onCheckedChange={()=>{setSortBy(item)}} checked={item === sortBy} className='h-4 w-4'/>
                    </div>
                ))}
            </PopoverContent>
        </Popover>
    </div>
  )
}
