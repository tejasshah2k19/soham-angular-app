import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-api-list-users',
  templateUrl: './api-list-users.component.html',
  styleUrls: ['./api-list-users.component.css']
})
export class ApiListUsersComponent implements OnInit {

  constructor(private apiService:RestApiService) { }

  users:Array<any>= [] 
 
  ngOnInit(): void {
    this.apiService.getAllUsers().subscribe(resp=>{
   
      
      this.users = resp;
    })
    
  }

  deleteUser(id:number){
     this.apiService.deleteUserById(id).subscribe(resp=>{
    
      this.apiService.getAllUsers().subscribe(resp=>{
        this.users = resp;
      })
    
    })
  }


}
