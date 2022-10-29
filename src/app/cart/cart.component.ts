import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public name:string="";
  public price:number =0;
  public quantity:number=0;
  public products:any=[
    {name:"pen", price:7, quantity:100, package:10},
    {name: "book", price:25,  quantity:500, package:25},
  ]



  constructor() { }

  ngOnInit(): void {
  }
  addtocart(){
    let product = {
      name: this.name,
      price:this.price,
      quantity:this.quantity,
    }
    this.products.push(product)
    this.name="";
    this.price=0;
    this.quantity=0;
  
    alert ("Registerd succefully");
  }
  delete(i:number){
    this.products.splice(i,1);
  }
  

}
