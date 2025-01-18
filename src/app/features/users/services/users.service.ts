import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../../models/entities/interfaces/maps.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  addUsers(name: string, phone: number, login: string): Observable<void> {
    return this.http.post<void>('/rest/v1/rpc/add_user', {
      p_name: name,
      p_phone: Number(phone),
      p_login: login,
    });
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/rest/v1/rpc/get_all_users');
  }

  deleteUser(id: string): Observable<void> {
    return this.http.post<void>(`/rest/v1/rpc/delete_user`, {
      row_id: id,
    });
  }
}
