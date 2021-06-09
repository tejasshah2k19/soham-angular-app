import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor(private productService:ProductService) { }

  products:Array<Product> = [] 
  ngOnInit(): void {
  
    this.products = this.productService.getAllProducts();
  }

  deleteProduct(productId:number){

  }


}
