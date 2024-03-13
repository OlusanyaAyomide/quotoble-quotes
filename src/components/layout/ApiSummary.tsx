import useGetQuotes from '@/hooks/useGetQuotes'
import React from 'react'

export default function ApiSummary() {
    const {data} = useGetQuotes()
  return (
    <div className=''>
        <div className="flex-center mb-3 justify-between">
            <span>Total Pages</span>
            <span>{data?.data.totalPages}</span>
        </div>
        <div className="flex-center mb-3 justify-between">
            <span>Quotes Per Page</span>
            <span>60</span>
        </div>
        <div className="flex-center mb-3 justify-between">
            <span>Total Quotes</span>
            <span>{data?.data.totalCount}</span>
        </div>
    </div>
  )
}
