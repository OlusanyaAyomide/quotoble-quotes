import { cn } from '@/lib/utils'
import React from 'react'

export default function Loading({className}:{className?:string}) {
  return (
    <div className={cn('max-w-[500px] mx-auto h-[300px] grid place-content-center',className)}>
        <div className="flex space-x-4">
            <div className="w-[10px] h-[10px] bg-main rounded-full duration-700 animate-bounce animation-delay-300"></div>
            <div className="w-[10px] h-[10px] bg-main rounded-full duration-700 animate-bounce animation-delay-600"></div>
            <div className="w-[10px] h-[10px] bg-main rounded-full duration-700 animate-bounce animation-delay-900"></div>
      </div>
    </div>
  )
}
