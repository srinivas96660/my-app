import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VechileService } from '../vechile.service';

@Component({
  selector: 'app-vechicle',
  templateUrl: './vechicle.component.html',
  styleUrls: ['./vechicle.component.css']
})
export class VechicleComponent implements OnInit {

  public vechicles: any = [];
  public term:string="";
  public column:string='';
  public order:string='';

  constructor(private _vechileService: VechileService, private router:Router) {
    this._vechileService.getVechicles().subscribe(
      (data: any) => {
        this.vechicles = data;
      },
      (err: any) => {
        alert("Internal Server error");
      }
    )

  }

  ngOnInit(): void {
  }
  filter(){
    this._vechileService.getFilteredVechicles(this.term).subscribe(
      (data:any)=>{
        this.vechicles=data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    
    )

  }
  pagination(page:number){
    this._vechileService.getPagedVechicles(page).subscribe(
      (data:any)=>{
        this.vechicles=data;
      },
      (err:any)=>{
        alert("Internal server Error")
      }
    )
  }
  sort(){
    this._vechileService.getSortedVechicles(this.column, this.order).subscribe(
      (data:any)=>{
        this.vechicles=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
  delete(id:string){
    this._vechileService.deleteVechile(id).subscribe(
      (data:any)=>{
        alert("Deleted successfully");
        location.reload();
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }
  view(id:string){
    this.router.navigateByUrl('/dashboard/vehicle-details/'+id);
  }

}
