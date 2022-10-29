import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employregeistration',
  templateUrl: './employregeistration.component.html',
  styleUrls: ['./employregeistration.component.css']
})
export class EmployregeistrationComponent implements OnInit {

  public name:string="";
  public age:number =0;
  public company:string="";
  public package:number=0;
  public percentage:string="";
  public employees:any=[
    {name:"ajay", age:20, company:"tcs", package:10, percentage:55},
    {name: "ram", age:25, company:"infosys", package:7, percentage:80}
  ]

  constructor() { }

  ngOnInit(): void {
  }
   register(){
  let employe = {
    name: this.name,
    age:this.age,
    company:this.company,
    package:this.package,
    percentage:this.percentage
  }
  this.employees.push(employe)
  this.name="";
  this.age=0;
  this.company="";
  this.package=0;
  this.percentage="";

  alert ("Registerd succefully");
}
delete(i:number){
  this.employees.splice(i,1);
}


}
