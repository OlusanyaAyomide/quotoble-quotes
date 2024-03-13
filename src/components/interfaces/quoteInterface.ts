

export interface IQuote{
    _id: string,
    author: string,
    content: string,
    tags:string[],
    authorSlug: string,
    length: number,
    dateAdded: string,
    dateModified: string
}


export interface IQuoteListData{
    count:number,
    totalCount: number,
    page: number,
    totalPages:number,
    lastItemIndex:number,
    results:IQuote[]
}

export interface IToolTip{
    id: number;
    name: string;
    image: string;
    designation: string;
}



