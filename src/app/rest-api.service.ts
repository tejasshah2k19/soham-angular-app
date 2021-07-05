import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private httpClient:HttpClient) { }

  saveUser(data:any):Observable<any>
  {
    let url = "http://restapi2020.herokuapp.com/api/users.json"
    return this.httpClient.post(url,data)
  }

  getAllUsers():Observable<any>{
    let url = "http://restapi2020.herokuapp.com/api/users.json"
    return this.httpClient.get(url);
  }


}

