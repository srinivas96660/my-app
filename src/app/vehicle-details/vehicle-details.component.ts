import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankService } from '../bank.service';
import { VechileService } from '../vechile.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  public id:string='';
  public vehicle:any={};

  constructor(private _vehicleservice:VechileService, private _activatedRoute:ActivatedRoute) {

    this._activatedRoute.params.subscribe(
      (data:any)=>{
        this.id=data.id;

        this._vehicleservice.getVechicle(data.id).subscribe(
          (data:any)=>{
            this.vehicle=data;
          }
        )
      }
    )
   }

  ngOnInit(): void {
  }

}
