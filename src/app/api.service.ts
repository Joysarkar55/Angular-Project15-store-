import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = "https://fakestoreapi.com/products";

  constructor(private http : HttpClient) { }
  getProducts(){
    return this.http.get(this.apiUrl)
  }
}
