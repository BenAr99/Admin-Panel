import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../../models/entities/interfaces/maps.interface';
import { ListData, PaginationService, SearchParams } from '../../../shared/table/table.service';

export interface UsersFilter {
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService implements PaginationService<User, UsersFilter> {
  constructor(private http: HttpClient) {}

  addUsers(name: string, phone: number, login: string): Observable<void> {
    return this.http.post<void>('/rest/v1/rpc/add_user', {
      p_name: name,
      p_phone: phone,
      p_login: login,
    });
  }

  getList(params: SearchParams<UsersFilter>): Observable<ListData<User>> {
    return this.http.post<ListData<User>>('/rest/v1/rpc/get_users', {
      // мб ошибка бэке
      filter: params.filter,
      limit_value: params.startItem,
      offset_value: params.skip,
    });
  }

  deleteUser(id: string): Observable<void> {
    return this.http.post<void>(`/rest/v1/rpc/delete_user`, {
      row_id: id,
    });
  }
}
