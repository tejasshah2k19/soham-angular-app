import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-api-edit-user',
  templateUrl: './api-edit-user.component.html',
  styleUrls: ['./api-edit-user.component.css']
})
export class ApiEditUserComponent implements OnInit {

  id: number = 0
  data: any
  myForm: FormGroup 

  constructor(private activatedRouter: ActivatedRoute, private apiService: RestApiService,private router:Router) {

    this.id = this.activatedRouter.snapshot.params.id;

    
    this.myForm = new FormGroup({
      first_name: new FormControl(),
      last_name: new FormControl(),
      email: new FormControl(),
      id: new FormControl(),
      })
   

    this.apiService.getDataById(this.id).subscribe(resp => {
      this.data = resp;
      //this.myForm.get("first_name")?.setValue(this.data.first_name)
     
      
      this.myForm.setValue({"first_name":this.data.first_name,"last_name":this.data.last_name,"email":this.data.email,"id":this.data.id})
    })

  }

  ngOnInit(): void {

    
  }

  updateUser(){
    console.log(this.myForm.value)
    this.apiService.updateUser(this.myForm.value).subscribe(resp=>{
      this.router.navigateByUrl("/api-list-users")
    })
  }
}
