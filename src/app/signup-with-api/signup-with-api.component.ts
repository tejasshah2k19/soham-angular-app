import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-signup-with-api',
  templateUrl: './signup-with-api.component.html',
  styleUrls: ['./signup-with-api.component.css']
})
export class SignupWithApiComponent implements OnInit {

  myForm: FormGroup
  constructor(private restApiService: RestApiService,private router:Router) {
    this.myForm = new FormGroup({
      first_name: new FormControl(""),
      last_name: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl(""),
      gender: new FormControl("")
    })

  }

  saveUser() {
    console.log(this.myForm.value);
    this.restApiService.saveUser(this.myForm.value).subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl("/api-list-users")
    })

  }

  ngOnInit(): void {

  }

}
