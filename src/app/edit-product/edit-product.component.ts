import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private productService:ProductService) { }
  product:Product = {productId:0,productName:"",productPrice:0}

  ngOnInit(): void {
    let productId = this.activatedRoute.snapshot.params.productId; //12
    this.product =   this.productService.getProductById(productId) //12=>data 
  }

  updateProduct(){
      this.productService.updateProduct(this.product)
  }
}
