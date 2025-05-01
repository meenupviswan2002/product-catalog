import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api_url = 'https://dummyjson.com/products'

  constructor(private http:HttpClient) { }

  getAllProductsAPI(){
    return this.http.get(this.api_url)
   }

   getAProductAPI(id:any){
    return this.http.get(`${this.api_url}/${id}`)
   }

}
