
export interface IBook{
    id: number;
    title: string;
    rating: number;
    comments?: any;
    description: string;
    imageUrl?: any;
    publishDate: string;
    author: IAuthor;
    addDate: Date;
    genre: number;
}

export interface IAuthor {
    authorId: number;
    firstName: string;
    lastName: string;
}
