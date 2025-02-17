import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListData, PaginationService, SearchParams } from '../../../shared/table/table.service';
import { History } from '../../../models/entities/interfaces/maps.interface';

@Injectable({
  providedIn: 'root',
})
export class HistoryService implements PaginationService<History> {
  constructor(private http: HttpClient) {}

  getList(params: SearchParams): Observable<ListData<History>> {
    return this.http.post<ListData<History>>('/rest/v1/rpc/get_history', {
      filter_value: params.filter,
      limit_value: params.startItem,
      offset_value: params.skip,
    });
  }
}
