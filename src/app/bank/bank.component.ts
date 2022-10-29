import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  

  public accounts: any = [];
  public details: string = '';
  
  


  constructor(private _bankservice: BankService, private router:Router) {
    this._bankservice.getAccounts().subscribe(

      (data: any) => {
        this.accounts = data;
      },
      (err: any) => {
        alert("Internal server error");
      }
    )
  }

  ngOnInit(): void {
  }

  filter() {
    this._bankservice.getFilteredAccounts(this.details).subscribe(
      (data: any) => {
        this.accounts = data;
      },
      (err: any) => {
        alert("internal server error")
      }
    )
  }
    pagination(page: number){
      this._bankservice.getPagedAccounts(page).subscribe(
        (data: any) => {
          this.accounts = data;
        },
        (err: any) => {
          alert("internal server error")
        }
      )

    }
    delete(id:string){
      this._bankservice.getAccount(id).subscribe(
        (data:any)=>{
          alert("delete sucessesfully");
          location.reload();
        },
        (err:any)=>{
          alert("internal server error");
        }
      )
    }
    view(id:string){
      this.router.navigateByUrl("dashboard/bank-details/"+id);
    }
  }


