import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
result:number;
x:number;
y:number;
fullname:string;
res:boolean;
  constructor() {
    this.result=0;
    this.x=0;
    this.y=0;
    this.res=false;
    this.fullname="";
   }

  ngOnInit(): void {
  }

  Addnumber(a:number,b:number):any{
    this.result=a+b;
  }

  Addtext(f:string,s:string):any{
    console.log(f);
    console.log(s);
    this.fullname=f+s;
  }

}
