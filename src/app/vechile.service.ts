import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VechileService {

  constructor(private _httpClient:HttpClient) { }

  getVechicles():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction");
  }
  getVechicle(id:any):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
  }

  getFilteredVechicles(term:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter="+term);
  }
  getPagedVechicles(page:number):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page="+page);
  }
  getSortedVechicles(column:string, order:string):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy= '+column+'&order='+order);
  }

  createVechile(data:any):Observable<any>{
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction", data);
  }

  updateVechile(id:string, data:any):Observable<any>{
    return this._httpClient.put("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction"+id, data);
  }

    deleteVechile(id:any):Observable<any>{
      return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
    }
  
}
