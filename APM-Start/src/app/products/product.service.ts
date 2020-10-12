import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core'
import {Observable, of} from 'rxjs';
import {IProduct} from './product';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable( {
    providedIn: 'root'
})
export class ProductService
{
  private prodUrl = 'api/products/products.json';
    constructor(private http: HttpClient) {
    }
    public prod : IProduct[];

   public getAllProducts() : Observable<IProduct[]>
    {       
      console.log("getting from");
     return this.http.get<IProduct[]>(this.prodUrl)
    }

    private handleError(err:HttpErrorResponse)
    {
        let erMsg='';
        if(err.error instanceof ErrorEvent){
            //get the error
            erMsg = `an error occurred ${err.error.message}`;
        }
        else
        {
            //server error?
            erMsg = `an server error occurred ${err.status} and the message is ${err.message}`;
        }
        console.error(erMsg)
    }


   public getProducts(): IProduct[]
    {
return [{
    "productId": 1,
    "productName": "Leaf Rake",
    "productCode": "GDN-0011",
    "releaseDate": "March 19, 2019",
    "description": "Leaf rake with 48-inch wooden handle.",
    "price": 19.95,
    "starRating": 3.2,
    "imageUrl": "assets/images/leaf_rake.png"
  },

  {
    "productId": 2,
    "productName": "Garden Cart",
    "productCode": "GDN-0023",
    "releaseDate": "March 18, 2019",
    "description": "15 gallon capacity rolling garden cart",
    "price": 32.99,
    "starRating": 4.2,
    "imageUrl": "assets/images/garden_cart.png"
  },
  {
    "productId": 5,
    "productName": "Hammer",
    "productCode": "TBX-0048",
    "releaseDate": "May 21, 2019",
    "description": "Curved claw steel hammer",
    "price": 8.9,
    "starRating": 5,
    "imageUrl": "assets/images/hammer.png"
  },
  {
    "productId": 8,
    "productName": "Saw",
    "productCode": "TBX-0022",
    "releaseDate": "May 15, 2019",
    "description": "15-inch steel blade hand saw",
    "price": 11.55,
    "starRating": 3.7,
    "imageUrl": "assets/images/saw.png"
  },
  {
    "productId": 10,
    "productName": "Video Game Controller",
    "productCode": "GMG-0042",
    "releaseDate": "October 15, 2018",
    "description": "Standard two-button video game controller",
    "price": 35.95,
    "starRating": 2,
    "imageUrl": "assets/images/xbox-controller.png"
  }]
    }
}