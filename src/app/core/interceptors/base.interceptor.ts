import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BaseInterceptor implements HttpInterceptor {
  private readonly baseUrl = 'https://eyxrmhvbutmdcycshzni.supabase.co';
  private readonly apikey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5eHJtaHZidXRtZGN5Y3Noem5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAxMTYxMzYsImV4cCI6MjA0NTY5MjEzNn0.JDrmn5pNWxLzhQU7maIsJStZhXjmvdwXI3ws3yds6iY';

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const modifiedRequest: HttpRequest<unknown> = req.clone({
      url: this.baseUrl + req.url,
      setHeaders: {
        apikey: this.apikey,
      },
    });
    return next.handle(modifiedRequest);
  }
}
