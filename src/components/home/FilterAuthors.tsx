import { mockAuthor } from '@/utils/constants'
import React from 'react'
import { Checkbox } from '../ui/checkbox'
import UserAvatar from '../ui-util/UserAvatar'
import useGetQuotes from '@/hooks/useGetQuotes'
import { getAvatarPath } from '@/utils/getAvatars'
import Loading from '../layout/Loading'
import { useQuoteStore } from '@/store/useQuoteStore'
import { Button } from '../ui/button'


export default function FilterAuthors() {

    const {data,isLoading,isFetching} = useGetQuotes()
    const {filteredAuthors,mutateFilteredAuthors,addAllAuthors} = useQuoteStore()
    //maps all the authors on the api response to an array of string
    const authorArray:string[] =[]
    const authors = data ? data.data.results.map((quote)=>{
        !authorArray.includes(quote.author) ? authorArray.push(quote.author) : null
    }) : []


    
    //if Author to be removed is in any of the filtedAuthoruthors Araray , it is unchecked
    return (
    <div className='shadow-md w-full bg-background border px-2'>
        <h3 className="font-semibold mt-3">
            <span>Add/Remove Authors</span>
        </h3>
        {!isLoading?
            <div className="mt-3 max-h-[310px] relative pb-2 overflow-scroll default-scroll">
                {authorArray.map((item,key)=>(
                    <div key={key} className="mb-3 flex-center">
                        <UserAvatar src={getAvatarPath(item.charAt(0))} className='h-6 w-6 shrink-0 mr-2'/>
                        <h3 className='grow'>{item}</h3>
                        <Checkbox
                            onCheckedChange={()=>{mutateFilteredAuthors(item)}} 
                            checked={!filteredAuthors.includes(item)} className='shrink-0 accent-main'/>
                    </div>
                ))}
                <Button onClick={addAllAuthors} size={"sm"} disabled={filteredAuthors.length === 0} className='bg-main px-6 hover:bg-main hover:brightness-110'>
                    <span>Add All +</span>
                </Button>
            </div>:<Loading className='h-[50px] max-w-[150px] mx-auto'/>
        }

    </div>
  )
}
