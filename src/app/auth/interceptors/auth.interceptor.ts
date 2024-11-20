import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../service/local-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService) {}
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const modifiedRequest: HttpRequest<unknown> = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.localStorageService.getAccessTokenLocalStorage()}`,
      },
    });
    return next.handle(modifiedRequest);
  }
}
