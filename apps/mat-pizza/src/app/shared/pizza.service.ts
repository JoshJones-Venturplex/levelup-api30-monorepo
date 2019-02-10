import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  baseUrl = 'https://level-up-api-snfwxrkzok.now.sh'

  constructor(private http: HttpClient) { }

  getPizzas() {
    return this.http.get<any>(`${this.baseUrl}/pizzas/`);
  }

  createPizza(pizza) {
    return this.http.post<any>(`${this.baseUrl}/pizzas`, pizza);
  }

  updatePizza(pizza) {
    return this.http.patch<any>(`${this.baseUrl}/pizzas/${pizza.id}`, pizza);
  }
  
  deletePizza(pizzaId) {
    return this.http.delete<any>(`${this.baseUrl}/pizzas/${pizzaId}`);
  }
}
