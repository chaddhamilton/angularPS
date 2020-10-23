import { Component, OnInit } from '@angular/core';
import { IProduct} from './product';
import { ProductService } from './product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  pageTitle :string = "Product Details";
  product : IProduct;
  
  constructor(private  prodService : ProductService, private router :ActivatedRoute) {
     
   
  }

  ngOnInit(): void {
  let id = +this.router.snapshot.paramMap.get("id");
  this.product = this.prodService.getById(id);
  
  }

}
