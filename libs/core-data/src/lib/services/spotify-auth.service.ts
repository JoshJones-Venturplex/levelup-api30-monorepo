import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../../../apps/mat-spotify/src/environments/environment';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthService {
  params: any;

  private _authFlag = 'isLoggedIn';
  private _onAuthSuccessUrl = '';
  private _onAuthFailureUrl = 'login';
  private _logoutUrl = 'http://localhost:4200';
  private _expiresAt: number;
  private _token = 'access_token';
  private _params = 'params';
  constructor(private http: HttpClient, private router: Router) {}
  
  get authSuccessUrl(): string {
    return this._onAuthSuccessUrl;
  }

  get authFailureUrl(): string {
    return this._onAuthFailureUrl;
  }

  get authenticated(): boolean {
    return JSON.parse(localStorage.getItem(this._authFlag));
  }

  get accessToken(): string {
    return JSON.parse(localStorage.getItem(this._token));
  }

  resetAuthFlag() {
    localStorage.removeItem(this._authFlag);
  }
  
  login() {
    window.location.href = `${environment.auth.domain}?client_id=${
      environment.auth.clientId
    }&redirect_uri=${environment.auth.redirect}&response_type=${
      environment.auth.responseType
    }`;
  }

  setAuth(authResult) {
    this._expiresAt = authResult.expiresIn * 1000 + Date.now();
    localStorage.setItem(this._authFlag, JSON.stringify(true));
    localStorage.setItem(this._token, JSON.stringify(authResult.access_token))
  }

  logout() {
    localStorage.setItem(this._authFlag, JSON.stringify(false));
    this.router.navigate(['']);
  }

  public setToken() {
    this.params = this.getHashParams();
    localStorage.accessToken = this.params.access_token;
    localStorage.tokenType = this.params.token_type;
    localStorage.expiration = this.params.expires_in;
    console.log(
      localStorage.accessToken,
      localStorage.tokenType,
      localStorage.expiration
    );
    this.router.navigate(['']);
  }

  getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    localStorage.setItem('params', JSON.stringify(hashParams));
    return of(hashParams);
  }

  getCurrentParams() {
    return of(JSON.parse(localStorage.getItem(this._params)));
  }
}
