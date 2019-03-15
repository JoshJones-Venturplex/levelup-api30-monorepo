import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Smoothie } from '@workspace/core-data';

@Injectable({
  providedIn: 'root'
})
export class SmoothieService {
  baseUrl: String = 'https://smoothie-api.herokuapp.com';
  // baseUrl: String = 'http://localhost:3000';
  // baseUrl: String = 'https://smoothie-api-uhycatkgvj.now.sh';

  constructor(private http: HttpClient) { }

  getSmoothies() {
    return this.http.get<Smoothie[]>(`${this.baseUrl}/smoothies/`);
  }

  createSmoothie(smoothie) {
    const {id, ...payload} = smoothie;
    return this.http.post<Smoothie>(`${this.baseUrl}/smoothies`, payload);
  }
  
  updateSmoothie(smoothie) {
    return this.http.patch<Smoothie>(`${this.baseUrl}/smoothies/${smoothie.id}`, smoothie);
  }

  deleteSmoothie(smoothie) {
    return this.http.delete<Smoothie>(`${this.baseUrl}/smoothies/${smoothie.id}`);
  }
}
