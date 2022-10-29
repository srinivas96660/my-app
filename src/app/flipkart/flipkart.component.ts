import { Component, OnInit } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent implements OnInit {

  public products:any=[];

  constructor(private _flipkartservice:FlipkartService) { 
    this._flipkartservice.getproducts().subscribe(
      (data:any)=>{
        this.products=data;
      },
        (err:any)=>{
          alert("internal server error")
        }
      
    )
  }

  ngOnInit(): void {
  }

}
