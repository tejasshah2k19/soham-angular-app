import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  n1:string=""
  n2:string=""
  ans:number=0
  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.ans = parseInt(this.n1) + parseInt(this.n2);
  }
  mul(){
    this.ans = parseInt(this.n1) * parseInt(this.n2);
  }
}
