import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-signup',
  templateUrl: './reactive-form-signup.component.html',
  styleUrls: ['./reactive-form-signup.component.css']
})
export class ReactiveFormSignupComponent implements OnInit {
  myForm: FormGroup


  constructor() {
    this.myForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', [Validators.required, this.chkPwdNCnfPwd])
    })
  }
  ngOnInit(): void {
  }
  saveUser() {
    console.log(this.myForm.valid)
    console.log(this.myForm.value)
  }

  //password -- confirmPassword same -->custom 

  chkPwdNCnfPwd(control: AbstractControl) {

    let cPassword = control.value; //confirmPassword 
    let password = control.parent?.get("password")?.value

    if (password == cPassword) {
      return null // no errror 
    } else {
      return {
        chkPwdNCnfPwd: true
      }
    }



  }


}
