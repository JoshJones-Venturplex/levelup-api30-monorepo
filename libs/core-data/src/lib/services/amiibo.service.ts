import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Amiibo } from '@workspace/core-data';

@Injectable({
  providedIn: 'root'
})
export class AmiiboService {
  baseUrl: String = 'http://www.amiiboapi.com/api';

  constructor(private http: HttpClient) { }

  getAmiibos() {
    return this.http.get<[Amiibo]>(`${this.baseUrl}/amiibo`);
  }
}
