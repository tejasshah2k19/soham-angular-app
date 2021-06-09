import { NONE_TYPE } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  products:Array<Product>=[] 


  constructor() { 
    let product1:Product={productId:1,productName:"amul",productPrice:250}
    let product2:Product={productId:2,productName:"laptop",productPrice:25000}
    let product3:Product={productId:3,productName:"iphone",productPrice:52000}
    let product4:Product = {productId:4,productName:"table",productPrice:1500}
    this.products.push(product1);
    this.products.push(product2);
    this.products.push(product3);
    this.products.push(product4);
  }

  //here we define all logic --functions 

  addProduct(data:Product){
    this.products.push(data);
  }

  getAllProducts():Array<Product>{
    return this.products;
  }

  getProductById(productId:number):Product{
   var product:Product = {productId:0,productName:"",productPrice:0}

    for(let i=0;i<this.products.length;i++){
        if(this.products[i].productId == productId){
          product = this.products[i]
        }
    }
    return product
  }


  //2 new value 
  updateProduct(product:Product){ //modified object 
    
    for(let i=0;i<this.products.length;i++){
      //array -> each product --> id 
      if(this.products[i].productId == product.productId){
          this.products[i] = product;
          break;
      }
    }
  }


}
