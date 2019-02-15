import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fruit } from '@workspace/core-data';

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  baseUrl: String = 'https://level-up-api-rpjdxzwbqn.now.sh';

  constructor(private http: HttpClient) { }

  getFruits() {
    return this.http.get<Fruit[]>(`${this.baseUrl}/fruits/`);
  }

  createFruit(fruit) {
    return this.http.post<Fruit>(`${this.baseUrl}/fruits`, fruit);
  }
  
  updateFruit(fruit) {
    return this.http.patch<Fruit>(`${this.baseUrl}/fruits/${fruit.id}`, fruit);
  }

  deleteFruit(fruit) {
    return this.http.delete<Fruit>(`${this.baseUrl}/fruits/${fruit.id}`);
  }
}
