import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventregistation',
  templateUrl: './eventregistation.component.html',
  styleUrls: ['./eventregistation.component.css']
})
export class EventregistationComponent implements OnInit {

  public name:string="";
  public names:string[]=["ajay", "anil"];

  constructor() { }

  ngOnInit(): void {
  }
  register(){
    if(this.name !=""){
    this.names.push(this.name);
    }
    this.name="";
  }
  delete(){
    this.names.pop();
  }

}
