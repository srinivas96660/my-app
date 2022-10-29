import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {

  public id: string = '';
  public bank: any = {};

  constructor(private _bankservice: BankService, private _activatedroute: ActivatedRoute) { 

  this._activatedroute.params.subscribe(
    (data: any) => {
      this.id = data.id;
    }
  
  )
  }

ngOnInit(): void {
}

}
