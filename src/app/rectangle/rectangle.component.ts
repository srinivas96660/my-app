import { provideImageKitLoader } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {

  public length:number=0;
  public bredth:number=0;
  public result:number=0;

  constructor() { }

  ngOnInit(): void {
  }
  area(){
    this.result=this.length * this.bredth;
}
perimeter(){
  this.result=2*this.length + 2*this.bredth;
}
}