import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pcpart } from '@workspace/core-data';

@Injectable({
  providedIn: 'root'
})
export class PcpartService {
  baseUrl: String = 'https://smoothie-api-tlphgzjqwc.now.sh';

  constructor(private http: HttpClient) { }

  getPcparts() {
    return this.http.get<Pcpart[]>(`${this.baseUrl}/pcparts/`);
  }

  createPcpart(pcpart) {
    return this.http.post<Pcpart>(`${this.baseUrl}/pcparts`, pcpart);
  }
  
  updatePcpart(pcpart) {
    return this.http.patch<Pcpart>(`${this.baseUrl}/pcparts/${pcpart.id}`, pcpart);
  }

  deletePcpart(pcpart) {
    return this.http.delete<Pcpart>(`${this.baseUrl}/pcparts/${pcpart.id}`);
  }
}
