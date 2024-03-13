import { cn } from '@/lib/utils'
import { Avatar,AvatarFallback } from '../ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'


export default function UserAvatar({src,className}:{src:string,className?:string}) {
  return (
    <Avatar className={cn('h-8 w-8',className)}>
      <AvatarFallback>TD</AvatarFallback>
      <AvatarImage className='object-cover' src={src}/>
    </Avatar>
  )
}
