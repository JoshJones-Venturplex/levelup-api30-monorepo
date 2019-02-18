import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '@workspace/core-data';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  baseUrl: String = 'https://level-up-api-varwfvewcd.now.sh';

  constructor(private http: HttpClient) { }

  getPlayers() {
    return this.http.get<Player[]>(`${this.baseUrl}/players/`);
  }

  createPlayer(player) {
    return this.http.post<Player>(`${this.baseUrl}/players`, player);
  }
  
  updatePlayer(player) {
    return this.http.patch<Player>(`${this.baseUrl}/players/${player.id}`, player);
  }

  deletePlayer(player) {
    return this.http.delete<Player>(`${this.baseUrl}/players/${player.id}`);
  }
}
