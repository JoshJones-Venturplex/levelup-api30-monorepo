import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  baseUrl = 'https://swapi.co/api'

  constructor(private http: HttpClient) { }

  getPeople(pageNum) {
    return this.http.get<any>(`${this.baseUrl}/people/?page=${pageNum}`);
  }

  getPerson(id) {
    return this.http.get<any>(`${this.baseUrl}/people/${id}`);
  }

  getStarShips(pageNum) {
    return this.http.get<any>(`${this.baseUrl}/starships/?page=${pageNum}`);
  }

  getStarship(id) {
    return this.http.get<any>(`${this.baseUrl}/starships/${id}`);
  }

  getVehicles(pageNum) {
    return this.http.get<any>(`${this.baseUrl}/vehicles/?page=${pageNum}`);
  }

  getVehicle(id) {
    return this.http.get<any>(`${this.baseUrl}/vehicles/${id}`);
  }

  getFilms() {
    return this.http.get<any>(`${this.baseUrl}/films`);
  }

  getFilm(id) {
    return this.http.get<any>(`${this.baseUrl}/films/${id}`);
  }

}
