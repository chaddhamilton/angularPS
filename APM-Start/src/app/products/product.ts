export interface IProduct {
    productId : number;
    productName : string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating : number;
    imageUrl: string;
}

export class ProductFilters
{
    constructor(public id: number, public name: string) { }
}