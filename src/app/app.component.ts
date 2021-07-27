import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'soham-app';
  isLoggedIn:boolean = false 
  constructor(){
    if(localStorage.getItem("isLoggedIn")){
      
      this.isLoggedIn=true

    }
  }

}
