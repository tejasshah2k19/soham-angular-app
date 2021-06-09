import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    CalcComponent,
    FileUploadComponent,
    AddProductComponent,
    ListProductComponent,
    EditProductComponent,
    SearchProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AlifeFileToBase64Module    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
