import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { LocalStorageService } from '../service/local-storage.service';

@Injectable()
export class AuthErrorInterceptor implements HttpInterceptor {
  constructor(
    private localStorageService: LocalStorageService,
    private authService: AuthService,
  ) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse): Observable<HttpEvent<unknown>> => {
        if (error.status === 401) {
          return this.authService.updateRefreshToken().pipe(
            switchMap(() => {
              const cloneRequest = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${this.localStorageService.getAccessTokenLocalStorage()}`,
                },
              });
              return next.handle(cloneRequest);
            }),
            catchError((refreshError) => {
              console.error('Failed to refresh token', refreshError);
              return throwError(() => refreshError); // Пробрасываем ошибку обновления токена
            }),
          );
        }

        // Если ошибка не 401, пробрасываем ее дальше
        return throwError(() => error);
      }),
    );
  }
}
