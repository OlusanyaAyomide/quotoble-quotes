import React from 'react'
import Header from './Header'

export default function LayOut({children}:{children:React.ReactNode}) {
  return (
    <div className='max-w-[1600px] mx-auto relative'>
        <Header/>
        <div className="pt-4 min-h-[100vh] animate-movebg bg-dots bg-[length:100px_100px] paddingx">
            {children}
        </div>
    </div>
  )
}
