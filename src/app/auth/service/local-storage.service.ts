import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  readonly accessTokenKey = 'accessToken';
  readonly refreshTokenKey = 'refreshToken';

  setToken(accessToken: string, refreshToken: string): void {
    localStorage.setItem(this.accessTokenKey, accessToken);
    localStorage.setItem(this.refreshTokenKey, refreshToken);
  }

  getRefreshTokenLocalStorage() {
    return localStorage.getItem(this.refreshTokenKey);
  }

  getAccessTokenLocalStorage() {
    return localStorage.getItem(this.accessTokenKey);
  }

  deleteToken(token: string): void {
    localStorage.removeItem(token);
  }
}
