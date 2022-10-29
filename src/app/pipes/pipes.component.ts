import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name:string="hello srinivas";
  public city:string="HYD";
  public dob:string ="10-05-2020";
  public today:Date = new Date();

  public user:any={name:"Abc", phone:6302404660}

  constructor() { }

  ngOnInit(): void {
  }

}
