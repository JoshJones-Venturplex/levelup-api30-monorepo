import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '@workspace/core-data';

@Injectable({
  providedIn: 'root'
})
export class AsoiafService {
  baseUrl: String = 'https://www.anapioficeandfire.com/api';

  constructor(private http: HttpClient) { }

  getCharacters(page) {
    return this.http.get<[Character]>(`${this.baseUrl}/characters?page=${page}&pageSize=10`);
  }
}
