import { Component, OnInit } from '@angular/core';
import { FootbalService } from '../footbal.service';

@Component({
  selector: 'app-footbal',
  templateUrl: './footbal.component.html',
  styleUrls: ['./footbal.component.css']
})
export class FootbalComponent implements OnInit {

  public image:any=[];

  constructor(private _footbalservice:FootbalService) {
    this._footbalservice.getimage().subscribe(
      (data:any)=>{
        this.image=data;
      },
      (err:any)=>{
        return("internal server error")
      }
    )
   }

  ngOnInit(): void {
  }

}
