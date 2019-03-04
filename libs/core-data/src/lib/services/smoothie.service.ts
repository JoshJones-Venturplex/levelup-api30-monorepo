import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Smoothie } from '@workspace/core-data';

@Injectable({
  providedIn: 'root'
})
export class SmoothieService {
  baseUrl: String = 'https://smoothie-api-uhycatkgvj.now.sh';

  constructor(private http: HttpClient) { }

  getSmoothies() {
    return this.http.get<Smoothie[]>(`${this.baseUrl}/smoothie/`);
  }

  createSmoothie(smoothie) {
    return this.http.post<Smoothie>(`${this.baseUrl}/smoothie`, smoothie);
  }
  
  updateSmoothie(smoothie) {
    return this.http.patch<Smoothie>(`${this.baseUrl}/smoothie/${smoothie.id}`, smoothie);
  }

  deleteSmoothie(smoothie) {
    return this.http.delete<Smoothie>(`${this.baseUrl}/smoothie/${smoothie.id}`);
  }
}
