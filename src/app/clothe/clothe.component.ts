import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothe',
  templateUrl: './clothe.component.html',
  styleUrls: ['./clothe.component.css']
})
export class ClotheComponent implements OnInit {

  public clothe:string=" ";

  constructor() { }

  ngOnInit(): void {
  }

}
