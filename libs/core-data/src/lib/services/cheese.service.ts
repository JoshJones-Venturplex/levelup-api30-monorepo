import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cheese } from '@workspace/core-data';

@Injectable({
  providedIn: 'root'
})
export class CheeseService {
  baseUrl: String = 'https://food-ekdllocmxr.now.sh';

  constructor(private http: HttpClient) { }

  getCheeses() {
    return this.http.get<Cheese[]>(`${this.baseUrl}/cheese/`);
  }

  createCheese(cheese) {
    return this.http.post<Cheese>(`${this.baseUrl}/cheese`, cheese);
  }
  
  updateCheese(cheese) {
    return this.http.patch<Cheese>(`${this.baseUrl}/cheese/${cheese.id}`, cheese);
  }

  deleteCheese(cheese) {
    return this.http.delete<Cheese>(`${this.baseUrl}/cheese/${cheese.id}`);
  }
}
