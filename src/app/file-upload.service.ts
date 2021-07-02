import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private httpClient:HttpClient) { }
//HttpClient is responsible to call any http api 
  api_key:string = "ABmhapbgQ6ySmOXLJB1Ioz"
  
  uploadFiletoServer(file:any):Observable<any>{
    let formData = new FormData();
    formData.append("file",file,file.name);
    let httpHeaders = new HttpHeaders().append("origin","https://www.file.io").append("referer","https://www.file.io")

    return this.httpClient.post("https://www.file.io/",formData)
  }

}
