import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AddStudentWithProfileComponent } from './add-student-with-profile/add-student-with-profile.component';
import { ApiEditUserComponent } from './api-edit-user/api-edit-user.component';
import { ApiListUsersComponent } from './api-list-users/api-list-users.component';
import { CalcComponent } from './calc/calc.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ListProductComponent } from './list-product/list-product.component';
import { LoginComponent } from './login/login.component';
import { PrimeTableDemoComponent } from './prime-table-demo/prime-table-demo.component';
import { ReactiveFormSignupComponent } from './reactive-form-signup/reactive-form-signup.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { SignupWithApiComponent } from './signup-with-api/signup-with-api.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"signup",component:SignupComponent},
  {path:"calc",component:CalcComponent},
  {path:"upload",component:FileUploadComponent},
  {path:"addproduct",component:AddProductComponent},
  {path:"listproduct",component:ListProductComponent},
  {path:"editproduct/:productId",component:EditProductComponent},
  {path:"searchproduct",component:SearchProductComponent},
  {path:"reactive-form-signup",component:ReactiveFormSignupComponent},
  {path:"add-student",component:AddStudentWithProfileComponent},
  {path:"signup-with-api",component:SignupWithApiComponent},
  {path:"api-list-users",component:ApiListUsersComponent},
  {path:"api-edit-user/:id",component:ApiEditUserComponent},
  {path:"prime-table",component:PrimeTableDemoComponent},
  {path:"",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
