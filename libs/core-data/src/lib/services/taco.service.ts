import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Taco } from '@workspace/core-data';

@Injectable({
  providedIn: 'root'
})
export class TacoService {
  baseUrl: String = 'https://level-up-api-snfwxrkzok.now.sh';

  constructor(private http: HttpClient) { }

  getTacos() {
    return this.http.get<Taco[]>(`${this.baseUrl}/tacos/`);
  }

  createTaco(taco) {
    return this.http.post<Taco>(`${this.baseUrl}/tacos`, taco);
  }
  
  updateTaco(taco) {
    return this.http.patch<Taco>(`${this.baseUrl}/tacos/${taco.id}`, taco);
  }

  deleteTaco(taco) {
    return this.http.delete<Taco>(`${this.baseUrl}/tacos/${taco.id}`);
  }
}
