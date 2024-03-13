import React from 'react'

export default function Error() {
  return (
    <div className='my-5 mb-10 w-full h-[270px]'>
        <div className="max-w-[300px] w-full  h-full mx-auto">
            <img src="/broken.svg" alt=""  className='object-contain h-full w-full'/>
            <h1 className="font-semibold  text-center">Something went wrong</h1>
        </div>
    </div> 
  )
}
