import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AddStudentWithProfileComponent } from './add-student-with-profile/add-student-with-profile.component';
import { CalcComponent } from './calc/calc.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ReactiveFormSignupComponent } from './reactive-form-signup/reactive-form-signup.component';
import { SearchProductComponent } from './search-product/search-product.component';
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
  {path:"add-student",component:AddStudentWithProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
