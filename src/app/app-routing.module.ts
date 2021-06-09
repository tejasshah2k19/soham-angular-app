import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { CalcComponent } from './calc/calc.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ListProductComponent } from './list-product/list-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"signup",component:SignupComponent},
  {path:"calc",component:CalcComponent},
  {path:"upload",component:FileUploadComponent},
  {path:"addproduct",component:AddProductComponent},
  {path:"listproduct",component:ListProductComponent},
  {path:"editproduct/:productId",component:EditProductComponent},
  {path:"searchproduct",component:SearchProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
