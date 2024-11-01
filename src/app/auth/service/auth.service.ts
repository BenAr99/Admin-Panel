import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // По сути должен быть интерфейс, но повторять его мне лень. Я полениця
  postAuth(credentials: Record<string, string>): Observable<any> {
    return this.http.post(
      'https://eyxrmhvbutmdcycshzni.supabase.co/auth/v1/token?grant_type=password',
      credentials,
      {
        headers: {
          apikey:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5eHJtaHZidXRtZGN5Y3Noem5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAxMTYxMzYsImV4cCI6MjA0NTY5MjEzNn0.JDrmn5pNWxLzhQU7maIsJStZhXjmvdwXI3ws3yds6iY',
        },
      },
    );
  }

  setToken(accessToken: string, refreshToken: string): void {
    console.log(accessToken);
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  }
}
