import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Device, MapDetails } from '../../../models/entities/interfaces/maps.interface';
import { Observable } from 'rxjs';
import { Booking } from '../../../models/entities/interfaces/bookingForm.interface';

@Injectable({
  providedIn: 'root',
})
export class MapsService {
  constructor(private http: HttpClient) {}

  // Берем карты всей организации, т.е тут id - индефикация организация
  getMaps(): Observable<MapDetails[]> {
    return this.http.get<MapDetails[]>('https://eyxrmhvbutmdcycshzni.supabase.co/rest/v1/zones', {
      headers: {
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5eHJtaHZidXRtZGN5Y3Noem5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAxMTYxMzYsImV4cCI6MjA0NTY5MjEzNn0.JDrmn5pNWxLzhQU7maIsJStZhXjmvdwXI3ws3yds6iY',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IkJxTGpaTjM0K0Y3c2U4bkYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2V5eHJtaHZidXRtZGN5Y3Noem5pLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI5MmY3MDE4ZS1kMmI5LTRmYWUtOGNiYS04YmJkYTEzZGRlOTMiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzMwNTQ1MTExLCJpYXQiOjE3MzA1NDE1MTEsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7fSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJwYXNzd29yZCIsInRpbWVzdGFtcCI6MTczMDU0MTUxMX1dLCJzZXNzaW9uX2lkIjoiYzI0ODk2NTMtODQ0Zi00NDlhLWI4YTgtNDE3Yjc1MThhZmZkIiwiaXNfYW5vbnltb3VzIjpmYWxzZX0.ggmF0zHU2bKzGGVTTXj_yJae41LEuN_USx8GQoMkf0o  ',
      },
    });
  }

  // Как бы если запрос будет идти от какого-либо uuid, это будет вставляться,
  // будет выдаваться нужныая карта

  getDevices(uuid: string): Observable<Device[] | null> {
    let params = new HttpParams();
    params = params.append('zone_id', `eq.${uuid}`);
    return this.http.get<Device[]>(
      'https://eyxrmhvbutmdcycshzni.supabase.co/rest/v1/device_with_user',
      {
        params,
        headers: {
          apikey:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5eHJtaHZidXRtZGN5Y3Noem5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAxMTYxMzYsImV4cCI6MjA0NTY5MjEzNn0.JDrmn5pNWxLzhQU7maIsJStZhXjmvdwXI3ws3yds6iY',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IkJxTGpaTjM0K0Y3c2U4bkYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2V5eHJtaHZidXRtZGN5Y3Noem5pLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI5MmY3MDE4ZS1kMmI5LTRmYWUtOGNiYS04YmJkYTEzZGRlOTMiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzMwNTQ1MTExLCJpYXQiOjE3MzA1NDE1MTEsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7fSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJwYXNzd29yZCIsInRpbWVzdGFtcCI6MTczMDU0MTUxMX1dLCJzZXNzaW9uX2lkIjoiYzI0ODk2NTMtODQ0Zi00NDlhLWI4YTgtNDE3Yjc1MThhZmZkIiwiaXNfYW5vbnltb3VzIjpmYWxzZX0.ggmF0zHU2bKzGGVTTXj_yJae41LEuN_USx8GQoMkf0o',
        },
      },
    );
  }

  postBooking(booking: Booking): Observable<object> {
    return this.http.post(
      'https://eyxrmhvbutmdcycshzni.supabase.co/rest/v1/rpc/assign_user_to_device',
      {
        new_zone: booking.zone,
        new_name_device: booking.device,
        new_phone: booking.phone,
        new_username: booking.userName,
      },
      {
        headers: {
          apikey:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5eHJtaHZidXRtZGN5Y3Noem5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAxMTYxMzYsImV4cCI6MjA0NTY5MjEzNn0.JDrmn5pNWxLzhQU7maIsJStZhXjmvdwXI3ws3yds6iY',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IkJxTGpaTjM0K0Y3c2U4bkYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2V5eHJtaHZidXRtZGN5Y3Noem5pLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI5MmY3MDE4ZS1kMmI5LTRmYWUtOGNiYS04YmJkYTEzZGRlOTMiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzMwNTQ1MTExLCJpYXQiOjE3MzA1NDE1MTEsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7fSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJwYXNzd29yZCIsInRpbWVzdGFtcCI6MTczMDU0MTUxMX1dLCJzZXNzaW9uX2lkIjoiYzI0ODk2NTMtODQ0Zi00NDlhLWI4YTgtNDE3Yjc1MThhZmZkIiwiaXNfYW5vbnltb3VzIjpmYWxzZX0.ggmF0zHU2bKzGGVTTXj_yJae41LEuN_USx8GQoMkf0o',
        },
      },
    );
  }
}
