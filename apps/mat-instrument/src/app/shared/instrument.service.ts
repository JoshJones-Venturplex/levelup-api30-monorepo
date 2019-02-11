import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
  baseUrl = 'https://level-up-api-mefqhdpvub.now.sh';

  constructor(private http: HttpClient) {}

  getInstruments() {
    return this.http.get<any>(`${this.baseUrl}/instruments`);
  }

  createInstrument(instrument) {
    return this.http.post<any>(`${this.baseUrl}/instruments`, instrument);
  }

  updateInstrument(instrument) {
    return this.http.patch<any>(
      `${this.baseUrl}/instruments/${instrument.id}`,
      instrument
    );
  }

  deleteInstrument(instrumentId) {
    return this.http.delete<any>(`${this.baseUrl}/instruments/${instrumentId}`);
  }
}
