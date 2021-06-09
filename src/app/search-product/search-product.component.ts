import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  products:Array<any> = [] 
  constructor(private productService:ProductService) { }
  search:string=""
  ngOnInit(): void {
    this.products =  this.productService.getAllProducts();
  }

  searchData(){
    this.products =  this.productService.getAllProducts();
 
    console.log(this.search)
    let finalSearchData:Array<any>= []    
    for(let i=0;i<this.products.length;i++){
      if(this.products[i].productName.startsWith(this.search )){
        finalSearchData.push(this.products[i]);
      }
    }

    this.products = finalSearchData
  }

  //sdf sf sdf f  d
  sortByName(){

    for(let i=0;i<this.products.length;i++){
      for(let j=0;j<this.products.length-1;j++){
        if(this.products[j].productName > this.products[j+1].productName ){
            let tmp = this.products[j];
            this.products[j] = this.products[j+1];
            this.products[j+1] =tmp;
        }
      } 
    }

  }


  sortByPrice(){

    for(let i=0;i<this.products.length;i++){
      for(let j=0;j<this.products.length-1;j++){
        if(this.products[j].productPrice > this.products[j+1].productPrice ){
            let tmp = this.products[j];
            this.products[j] = this.products[j+1];
            this.products[j+1] =tmp;
        }
      } 
    }

  }

}
