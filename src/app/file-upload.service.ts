import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private httpClient:HttpClient) { }
//HttpClient is responsible to call any http api 

  uploadFiletoServer(file:any):Observable<any>{
    let formData = new FormData();
    formData.append("file",file,file.name);
   return this.httpClient.post("https://www.file.io/",formData)
  }

}
