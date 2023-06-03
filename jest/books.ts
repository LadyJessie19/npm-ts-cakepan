interface IBook {
    author: string;
    pages: number;
    title: string;
}

interface IBookCreated extends IBook {
    id:string;
    createdAt:Date;
}

export function createBook(payload: IBook): IBookCreated {
    const newBook = {
        ...payload,
        id: `${new Date().getTime()}`,
        createdAt: new Date()
    };
    return newBook;
}