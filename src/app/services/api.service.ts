import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  api_url = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  //API to get all products
  getAllProductsAPI() {
    return this.http.get(this.api_url);
  }

  //API to get a product
  getAProductAPI(id: any) {
    return this.http.get(`${this.api_url}/${id}`);
  }
}
