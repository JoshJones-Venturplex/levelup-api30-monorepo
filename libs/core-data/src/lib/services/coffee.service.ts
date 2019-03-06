import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coffee } from '@workspace/core-data';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  baseUrl: String = 'http://localhost:3000';
  // baseUrl: String = 'https://coffee-api-rauitffewn.now.sh';

  constructor(private http: HttpClient) { }

  getCoffees() {
    return this.http.get<Coffee[]>(`${this.baseUrl}/coffee/`);
  }

  createCoffee(coffee) {
    return this.http.post<Coffee>(`${this.baseUrl}/coffee`, coffee);
  }
  
  updateCoffee(coffee) {
    return this.http.patch<Coffee>(`${this.baseUrl}/coffee/${coffee.id}`, coffee);
  }

  deleteCoffee(coffee) {
    return this.http.delete<Coffee>(`${this.baseUrl}/coffee/${coffee.id}`);
  }
}
