import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { CalcComponent } from './calc/calc.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { ReactiveFormSignupComponent } from './reactive-form-signup/reactive-form-signup.component';
import { AddStudentWithProfileComponent } from './add-student-with-profile/add-student-with-profile.component';
import {  HttpClientModule } from '@angular/common/http';
import { SignupWithApiComponent } from './signup-with-api/signup-with-api.component';
import { ApiListUsersComponent } from './api-list-users/api-list-users.component'
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    CalcComponent,
    FileUploadComponent,
    AddProductComponent,
    ListProductComponent,
    EditProductComponent,
    SearchProductComponent,
    ReactiveFormSignupComponent,
    AddStudentWithProfileComponent,
    SignupWithApiComponent,
    ApiListUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AlifeFileToBase64Module,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
