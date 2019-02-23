import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  baseUrl: String = 'https://api.spotify.com/v1';

  constructor(private http: HttpClient) { }

  getNewReleases() {
    console.log("GETTING");
    return this.http.get<any[]>(`${this.baseUrl}/browse/new-releases`);
  }
}
