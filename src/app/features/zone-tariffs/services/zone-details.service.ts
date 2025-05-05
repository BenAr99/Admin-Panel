import { Injectable } from '@angular/core';
import { ListData, PaginationService, SearchParams } from '../../../shared/table/table.service';
import { Device } from '../../../models/entities/interfaces/maps.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface DeviceDetailsFilter {
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class ZoneDetailsService implements PaginationService<Device, DeviceDetailsFilter> {
  constructor(private http: HttpClient) {}

  getList(params: SearchParams<DeviceDetailsFilter>): Observable<ListData<Device>> {
    return this.http.post<ListData<Device>>('/rest/v1/rpc/get_devices_by_zone', {
      filter: params.filter,
      limit_value: params.startItem,
      offset_value: params.skip,
    });
  }
}
