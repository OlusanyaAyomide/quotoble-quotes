import { Icons } from '@/utils/Icons'
import UserAvatar from '../ui-util/UserAvatar'
import { Button } from '../ui/button'
import { useContext, useState } from 'react'
import { Popover,PopoverTrigger,PopoverContent } from '../ui/popover'
import { SheetTrigger,SheetContent,Sheet } from '../ui/sheet'
import ApiSummary from './ApiSummary'
import {Drawer,DrawerClose,DrawerContent,DrawerDescription,DrawerFooter,DrawerHeader,DrawerTitle,DrawerTrigger} from "@/components/ui/drawer"
import QuoteFilters from '../home/QuoteFilters'
import { Link, useLocation } from 'react-router-dom'
// import UserProfile from './UserProfile'


export default function Header() {

    const {pathname} = useLocation()
    const showFilters = pathname === "/"

    const [isOpen,setIsOpen] = useState(false)
  return (
    <header className="sticky left-0 z-30 paddingx shadow-sm top-0 w-full bg-background py-1 lg:py-2 flex-center justify-between border-b">
        <span className="text-xl font-semibold">Quotes App</span>
        <div className="max-lg:hidden flex-center text-fade">

            {showFilters?<div className="flex">
                <UserAvatar src='/profile.png'/>
                <Popover onOpenChange={(state)=>{setIsOpen(state)}}>
                    <PopoverTrigger asChild>
                        <button  className={`text-xl ml-2  p-2 ${isOpen?"rotate-180":""} transition-all`}>
                            <Icons.angleDown className = "text-base text-fade"/>
                        </button>
                    </PopoverTrigger>
                    <PopoverContent align='end' className='' onFocusOutside={()=>{setIsOpen(false)}} >
                        {/* <UserProfile/> */}
                        <ApiSummary/>
                    </PopoverContent>
                </Popover>     
            </div>:null}
        </div>
        {showFilters?<div className="flex-center lg:hidden">
            <Drawer>
                <DrawerTrigger asChild className='lg:hidden cursor-pointer'>
                    <Button variant={"ghost"} size={"icon"}>
                        <Icons.filter className='text-xl  text-fade'/>
                    </Button>
                </DrawerTrigger>
                <DrawerContent className='lg:hidden h-[90vh] px-4 overflow-hidden outline-none'>
                    <div className="h-full overflow-auto default-scroll pt-4">
                        <div className="max-w-[500px] mx-auto">
                            <QuoteFilters/>
                        </div>                        
                    </div>
                </DrawerContent>
            </Drawer>
            <Sheet>
                <SheetTrigger className='lg:hidden' asChild>
                    <Button variant='ghost' size='icon'>
                        <Icons.menu className = "text-2xl"/>
                    </Button>
                </SheetTrigger>
                <SheetContent side='right' className={`px-3 pt-10`}>
                    {/* <UserProfile/> */}
                    <ApiSummary/>
                </SheetContent>
            </Sheet>
        </div>:
            <Link to={"/"}>
                <Button size={"icon"} variant={"ghost"}>
                    <Icons.home className='text-fade text-2xl'/>
                </Button>
            </Link>}
    </header>
  )
}
