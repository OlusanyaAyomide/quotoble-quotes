import React from 'react'
import { CardBody,CardContainer,CardItem } from '../ui/ThrreeDcard'
import UserAvatar from '../ui-util/UserAvatar'
import { useParams } from 'react-router-dom'

import { useQuoteDetail } from '@/hooks/useQuoteDetail'
import Loading from '../layout/Loading'
import { getAvatarPath } from '@/utils/getAvatars'
import { errortext } from '@/utils/constants'
import NotFound from '../layout/NotFound'
import Error from '../layout/Error'
export default function QuoteView() {

    const {id} = useParams()
    
    const {data,isLoading,failureReason} = useQuoteDetail({id})

  return (
    <div className="">
    {data?.data?
        <CardContainer className='-mt-6 pb-20 w-full max-w-[800px] mx-auto'>
            <div className="max-w-[500px] mx-auto">
                <CardBody className='bg-background border rounded-md  shadow-md hover:shadow-lg transition-all duration-300 p-6'>
                    <CardItem className='flex-center mt-3 mb-2 ' translateZ="50">
                        <UserAvatar src={getAvatarPath(data.data.author.charAt(0))}/>
                        <h3 className="ml-2">{data.data.author}</h3>
                    </CardItem>
                    <CardItem translateZ="120" translateY="10" className="relative rounded-md overflow-hidden bg-cover bg-[url('/quotebg.jpg')]">
                        <div className='absolute inset-0 bg-[#2c092c78] '></div>
                        <div className="relative z-20 py-16 px-4 text-white font-medium">
                            <h1>
                                <span className='text-xl md:text-[22px]'>{data.data.content}</span>
                                <span className='ml-2 opacity-50'>...{data.data.author}</span>
                            </h1>
                        </div>
                    </CardItem>
                </CardBody>
            </div>
        </CardContainer>
        :isLoading?<Loading/>:
        failureReason?.message === errortext?<NotFound/>:<Error/>
}

</div>
  )
}
