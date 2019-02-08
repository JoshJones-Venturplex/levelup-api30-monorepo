import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnergyService {

  baseUrl = 'https://level-up-api-zderqmkwsj.now.sh'

  constructor(private http: HttpClient) { }

  getDrinks() {
    return this.http.get<any>(`${this.baseUrl}/drinks`);
  }

  createDrink(drink) {
    return this.http.post<any>(`${this.baseUrl}/drinks`, drink);
  }

  updateDrink(drink) {
    return this.http.patch<any>(`${this.baseUrl}/drinks/${drink.id}`, drink);
  }
  
  deleteDrink(drinkId) {
    return this.http.delete<any>(`${this.baseUrl}/drinks/${drinkId}`);
  }
}
