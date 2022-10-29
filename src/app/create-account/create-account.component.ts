import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VechileService } from '../vechile.service';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  public vehicleForm:FormGroup=new FormGroup(
    {
      Vehicle: new FormControl(),
      manufacturer: new FormControl(),
      model: new FormControl(),
      type: new FormControl(),
      fuel: new FormControl(),
      color: new FormControl(),
    }
  )

  constructor(private _vechileservice:VechileService) { }

  ngOnInit(): void {
  }
  submit(){
    this._vechileservice.createVechile(this.vehicleForm.value).subscribe(
    (data:any)=>{
      alert("created sucessesfully")
    },
    (err:any)=>{
      alert("internal server error")
    }
    )
  }

}
