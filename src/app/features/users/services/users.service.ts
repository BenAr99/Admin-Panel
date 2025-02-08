import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UsersData } from '../../../models/entities/interfaces/maps.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  addUsers(name: string, phone: number, login: string): Observable<void> {
    return this.http.post<void>('/rest/v1/rpc/add_user', {
      p_name: name,
      p_phone: phone,
      p_login: login,
    });
  }

  getUsersTest(filter: string = '', limit: number = 10, offset: number = 0): Observable<UsersData> {
    return this.http.post<UsersData>('/rest/v1/rpc/get_userstest', {
      filter_value: filter,
      limit_value: limit,
      offset_value: offset,
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

  searchUser(text: string): Observable<User[]> {
    return this.http.post<User[]>(`/rest/v1/rpc/search_users`, {
      filter_value: text,
    });
  }
}
