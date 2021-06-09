import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product:Product = {productId:0,productName:"h",productPrice:0}
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }
 
  addProduct(){
    alert(this.product.productName);
    this.productService.addProduct(this.product); 
  }

}
