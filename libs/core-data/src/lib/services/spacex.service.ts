import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ship } from '@workspace/core-data';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  baseUrl: String = 'https://api.spacexdata.com/v3';

  constructor(private http: HttpClient) { }

  getShips() {
    return this.http.get<Ship[]>(`${this.baseUrl}/ships`);
  }
}