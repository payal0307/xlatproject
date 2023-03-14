import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  register:any;
  constructor(private http:HttpClient) { }
  getProduct(){
    return this.http.get<any>("http://localhost:8080/getAllProduct")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
