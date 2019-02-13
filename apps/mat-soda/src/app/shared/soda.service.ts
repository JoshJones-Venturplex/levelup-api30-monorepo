import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Soda } from '../shared/soda';

@Injectable({
  providedIn: 'root'
})
export class SodaService {
  baseUrl: String = 'https://food-hsgygetltn.now.sh';

  constructor(private http: HttpClient) { }

  getSodas() {
    return this.http.get<Soda[]>(`${this.baseUrl}/soda/`);
  }

  createSoda(soda) {
    return this.http.post<Soda>(`${this.baseUrl}/soda`, soda);
  }
  
  updateSoda(soda) {
    return this.http.patch<Soda>(`${this.baseUrl}/soda/${soda.id}`, soda);
  }

  deleteSoda(soda) {
    return this.http.delete<Soda>(`${this.baseUrl}/soda/${soda.id}`);
  }
}
