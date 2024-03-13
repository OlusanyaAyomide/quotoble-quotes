import { convertDate, truncateLongWords } from '@/utils/textFormat'
import { Button } from '../ui/button'
import { Icons } from '@/utils/Icons'
import UserAvatar from '../ui-util/UserAvatar'
import useInfiniteScroll from 'react-infinite-scroll-hook'
import { useState } from 'react'
import { IQuote } from '../interfaces/quoteInterface'
import { Link } from 'react-router-dom'
import { getAvatarPath } from '@/utils/getAvatars'



export default function QuoteCards({data}:{data:IQuote[]}) {

    const DEFAULT = 10 
    const [viewedCount,setviewedCount] = useState(DEFAULT)

    //renders element in batch of 10 when they are needed to optimize application
    const [ref] = useInfiniteScroll({
    onLoadMore:()=>{setviewedCount((prev=>prev+5))},
    loading:false,
    hasNextPage:viewedCount < data.length,
    })
    const renderedQuote = data.slice(0,viewedCount)

    return (
    <div className='flex flex-wrap'>
        {renderedQuote.map((item,key)=>{
            const truncatedWords = truncateLongWords(item.content)
            const avatarPath = getAvatarPath(item.author.charAt(0))
            return(
            <div key={key} className={`${key%2===0?"md:pr-2":"lg:pl-2"}  mb-4 w-full md:w-6/12`}>
                <div  className='bg-background h-full  group px-2 py-4 shadow-md border hover:shadow-lg transition-all duration-300 rounded-md mb-4'>
                    <h3 className="font-medium text-center text-base">{truncatedWords}</h3>
                    <div className='mt-4 mb-3'>
                        <div className="flex justify-center">
                            <Link to={`/quotes/${item._id}`}>
                                <Button className='w-0 px-0 h-8 overflow-hidden bg-main hover:bg-main opacity-0 group-hover:opacity-100 hover:brightness-110 group-[btn] group-hover:w-fit group-hover:px-6 mx-auto hover:w-[100px] transition-all duration-300'>
                                    <span className='text-white' >Read More</span>
                                    <Icons.rightArrow className='group-[btn]:hover:translate-x-3 text-xl ml-2 text-white transition-all duration-300 text-foreground'/>
                                </Button>
                            </Link>
                        </div>

                         <div className="h-[1px] mt-[2px] w-[11px] bg-main transition-all duration-300 group-hover:w-[180px] mx-auto rounded-full" ></div>
                    </div>
                    <div className="mt-5 flex-center font-medium">
                        <UserAvatar className='h-10 w-10'  src={avatarPath}/>
                        <span className='ml-1'>{item.author}</span>
                        <span className='h-4 bg-fade rounded-md w-[2px] mx-5'></span>
                        <span>{convertDate(item.dateAdded)}</span>
                    </div>
                    {item.tags.length>0?<div className="mt-4 flex-center flex-wrap ">
                        {item.tags.map((item,keys)=>(
                            <div key={keys} className="rounded-2xl mr-3 mb-1 border-main border transition-all duration0-300  py-[2px] px-4 text-sm">{item}</div>
                        ))}
                    </div>:null}
                    </div>
            </div>   
            )
        })}
        {/* adds new quotes if users scroll to bottom of page */}
        {viewedCount < data.length && <div className='relative bottom-[400px]' ref={ref}>
            <div className="relative top-[400px] opacity-0">
            </div>
       </div>}
        {data.length === 0 ?
        <div className='my-5 w-full h-[270px]'>
            <div className="max-w-[300px] w-full  h-full mx-auto">
                <img src="/zeroResult.svg" alt=""  className='object-contain h-full w-full'/>
                <h1 className="font-semibold  text-center">No Matching Query</h1>
            </div>
        </div> 
        :null   
    }
    </div>


  )
}
