import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dev } from '@workspace/core-data';

@Injectable({
  providedIn: 'root'
})
export class VenturplexService {
  baseUrl: String = 'https://venturplex-api-zaqnyhypff.now.sh';

  constructor(private http: HttpClient) { }

  getDevs() {
    return this.http.get<Dev[]>(`${this.baseUrl}/Devs/`);
  }

  createDev(Dev) {
    return this.http.post<Dev>(`${this.baseUrl}/Devs`, Dev);
  }
  
  updateDev(Dev) {
    return this.http.patch<Dev>(`${this.baseUrl}/Devs/${Dev.id}`, Dev);
  }

  deleteDev(Dev) {
    return this.http.delete<Dev>(`${this.baseUrl}/Devs/${Dev.id}`);
  }
}
