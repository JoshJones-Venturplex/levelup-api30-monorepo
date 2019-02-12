import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  baseUrl: String = 'https://video-games-khnlftutcr.now.sh';

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get<any>(`${this.baseUrl}/videogames/`);
  }

  createGame(game) {
    return this.http.post<any>(`${this.baseUrl}/videogames`, game);
  }
  
  updateGame(game) {
    return this.http.patch<any>(`${this.baseUrl}/videogames/${game.id}`, game);
  }

  deleteGame(game) {
    return this.http.delete<any>(`${this.baseUrl}/videogames/${game.id}`);
  }
}
