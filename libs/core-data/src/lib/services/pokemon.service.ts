import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon, PokemonDetail } from '@workspace/core-data';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl: String = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemon(offset) {
    return this.http.get<Pokemon[]>(`${this.baseUrl}/pokemon-species?offset=${offset}&limit=20`);
  }

  getPokemonDetails(url) {
    return this.http.get<PokemonDetail>(`${url}`);
  }
}
