import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Burger } from '@workspace/core-data';

@Injectable({
  providedIn: 'root'
})
export class BurgerService {
  baseUrl: String = 'https://food-ekdllocmxr.now.sh';

  constructor(private http: HttpClient) { }

  getBurgers() {
    return this.http.get<Burger[]>(`${this.baseUrl}/burgers/`);
  }

  createBurger(burger) {
    return this.http.post<Burger>(`${this.baseUrl}/burgers`, burger);
  }
  
  updateBurger(burger) {
    return this.http.patch<Burger>(`${this.baseUrl}/burgers/${burger.id}`, burger);
  }

  deleteBurger(burger) {
    return this.http.delete<Burger>(`${this.baseUrl}/burgers/${burger.id}`);
  }
}
