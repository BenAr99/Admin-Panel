import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListData, PaginationService, SearchParams } from '../../../shared/table/table.service';
import { Device, History, User } from '../../../models/entities/interfaces/maps.interface';

export interface HistoryFilter {
  text: string;
  date: Date;
}

@Injectable({
  providedIn: 'root',
})
export class HistoryService implements PaginationService<History, HistoryFilter> {
  constructor(private http: HttpClient) {}

  getDevice(id: string): Observable<Device> {
    return this.http.post<Device>(`/rest/v1/rpc/get_device_by_id`, {
      p_id: id,
    });
  }

  getUser(id: string): Observable<User> {
    return this.http.post<User>(`/rest/v1/rpc/get_user_by_id`, {
      p_id: id,
    });
  }

  getList(params: SearchParams<HistoryFilter>): Observable<ListData<History>> {
    return this.http.post<ListData<History>>('/rest/v1/rpc/get_history', {
      filter: params.filter,
      limit_value: params.startItem,
      offset_value: params.skip,
    });
  }
}
