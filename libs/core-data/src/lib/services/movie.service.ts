import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieInfo } from '@workspace/core-data';
import { environment } from '../../../../../apps/mat-movie/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseUrl: String = 'http://www.omdbapi.com';
  key: string = environment.apiKey;

  constructor(private http: HttpClient) { }

  getMovies(search) {
    return this.http.get<MovieInfo[]>(`${this.baseUrl}?s=${search}&apikey=${this.key}`);
  }

  getMovieInfo(id) {
    return this.http.get<MovieInfo>(`${this.baseUrl}?i=${id}&apikey=${this.key}`);
  }
}
