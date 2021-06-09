import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstName:string=""
  email:string=""
  password:string=""
  constructor() { }

  ngOnInit(): void {
  }

  getData(){
    console.log(this.firstName);
    console.log(this.email);
    console.log(this.password);
    
    
    
  }
}
