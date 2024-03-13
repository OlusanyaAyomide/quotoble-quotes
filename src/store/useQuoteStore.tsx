import { create } from "zustand";

export type TSortBy = 'Default' | 'Id' | 'Author'


interface IQuotesStore{
    page:number
    NextPage:()=>void
    PreviousPage:()=>void
    filteredAuthors:string[]
    mutateFilteredAuthors:(author:string)=>void
    selectedDate:Date | undefined,
    setSelectedDate:(date?:Date)=>void
    sortBy:TSortBy
    setSortBy:(soryby:TSortBy)=>void
    addAllAuthors:()=>void

}

export const useQuoteStore =create<IQuotesStore>((set)=>({
    page:1,
    filteredAuthors:[],
    //check if author is already in list of filtered author, if present it is removed otherwise it is added
    mutateFilteredAuthors:(author)=>{
        set((state)=>{
                const {filteredAuthors} = state
                if(filteredAuthors.includes(author)){
                    const updatedAuthor =  filteredAuthors.filter((item)=>{return item !== author})
                    return {filteredAuthors:updatedAuthor}
                }
                else{
                    return {filteredAuthors:[...filteredAuthors,author]}
                }
        })
    },
    NextPage:()=>{
        set((state)=>({
            page:state.page+1
        }))
    },
    PreviousPage:()=>{
        set((state)=>({
            page:state.page<=1?1:state.page-1
        }))   
    },
    //defaults selected date to undefined to view all quotes
    selectedDate:undefined,
    setSelectedDate:(date)=>{
        set(()=>(
            {selectedDate:date}
        ))
    },
    sortBy:"Default" as TSortBy,
    setSortBy:(sort:TSortBy)=>{
        set(()=>({
            sortBy:sort
        }))
    },
    addAllAuthors:()=>{
        set(()=>({
            filteredAuthors:[]
        }))
    }
}))
    