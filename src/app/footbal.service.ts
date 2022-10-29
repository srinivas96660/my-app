import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootbalService {

  constructor(private _httpclient:HttpClient) { }
  getimage():Observable<any>{
    return this._httpclient.get("https://www.boredapi.com/api/activity");
  }
}
