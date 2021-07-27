import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-prime-table-demo',
  templateUrl: './prime-table-demo.component.html',
  styleUrls: ['./prime-table-demo.component.css']
})
export class PrimeTableDemoComponent implements OnInit {

  constructor(private restApi:RestApiService) { }
  loading: boolean = true;
  users :Array<any> = [] 
  ngOnInit(): void {
    this.restApi.getAllUsers().subscribe(resp=>{
      this.users = resp; 
    })
  }
  clear(table: Table) {
    table.clear();
  }

}
