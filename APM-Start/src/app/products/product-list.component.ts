import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { IProduct, ProductFilters } from './product';
import { ProductService } from './product.service';


//component decorator
@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./productlistcomponent.css'] //array for adding multiple styles
})

export class ProductListComponent implements OnInit {
  errorMessage: any;

  constructor(private productService: ProductService) {
  }

  //lifecycle hook
  ngOnInit(): void {
     this.getProducts();
  }
  
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    // test this with a foreach
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1)
  }

  public getProducts() : void {
   // this.products = this.productService.getProducts();
    this.productService.getAllProducts().subscribe(p => this.products = p
       = this.filteredProducts = p);
  }

  

//2 way binding 
  private _listFilter: string;
  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(value: string) {
    if (value == '') {
      this.filteredProducts = this.products;
    }
    else {
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
      this._listFilter = value;
    }
  }

  private _catFilter: string;
  public get catFilter(): string {
    return this._catFilter;
  }
  public set catFilter(v: string) {
    this._catFilter = v;
  }


  pageTitle: string = "Product List";
  products: IProduct[];

  filterBy: string = "cart";
  imageWidth: number = 30;
  showImage: boolean = false;
  filteredProducts: IProduct[]; //filterd list
  //Selected
  selectedProdFilter: ProductFilters = new ProductFilters(0, "Name");

  productFilter = [
    new ProductFilters(0, "Name"),
    new ProductFilters(1, "Code")
  ];
  

  //Toggle image function  
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  //Filter function



}


