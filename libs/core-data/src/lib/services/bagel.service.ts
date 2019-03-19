import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bagel } from '@workspace/core-data';

@Injectable({
  providedIn: 'root'
})
export class BagelService {
  baseUrl: String = 'https://bagel-api.herokuapp.com';

  constructor(private http: HttpClient) { }

  getBagels() {
    return this.http.get<Bagel[]>(`${this.baseUrl}/bagels/`);
  }

  createBagel(bagel) {
    const {id, ...payload} = bagel;
    return this.http.post<Bagel>(`${this.baseUrl}/bagels`, payload);
  }
  
  updateBagel(bagel) {
    return this.http.patch<Bagel>(`${this.baseUrl}/bagels/${bagel.id}`, bagel);
  }

  deleteBagel(bagel) {
    return this.http.delete<Bagel>(`${this.baseUrl}/bagels/${bagel.id}`);
  }
}
