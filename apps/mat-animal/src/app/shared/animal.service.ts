import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from '../shared/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  baseUrl: String = 'https://level-up-api-qllahajrnz.now.sh';

  constructor(private http: HttpClient) { }

  getAnimals() {
    return this.http.get<Animal[]>(`${this.baseUrl}/animals/`);
  }

  createAnimal(animal) {
    return this.http.post<Animal>(`${this.baseUrl}/animals`, animal);
  }
  
  updateAnimal(animal) {
    return this.http.patch<Animal>(`${this.baseUrl}/animals/${animal.id}`, animal);
  }

  deleteAnimal(animal) {
    return this.http.delete<Animal>(`${this.baseUrl}/animals/${animal.id}`);
  }
}
