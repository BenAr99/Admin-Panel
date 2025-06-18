import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { getToken } from '../../models/entities/interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
  ) {}

  updateRefreshTokenAfter(time: number) {
    setInterval(() => {
      this.updateRefreshToken();
    }, time * 1000);
  }

  postAuth(credentials: Record<string, string>): Observable<getToken> {
    return this.http.post<getToken>('/auth/v1/token?grant_type=password', credentials, {});
  }

  updateRefreshToken(): Observable<void> {
    return this.http
      .post<getToken>(`/auth/v1/token?grant_type=refresh_token`, {
        refresh_token: this.localStorageService.getRefreshTokenLocalStorage(),
      })
      .pipe(
        map((response) => {
          const newAccessToken = response.access_token;
          const newRefreshToken = response.refresh_token;

          this.localStorageService.setToken(newAccessToken, newRefreshToken);

          return undefined;
        }),
      );
  }
}
