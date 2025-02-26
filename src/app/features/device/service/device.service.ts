import { Injectable } from '@angular/core';
import { ListData, PaginationService, SearchParams } from '../../../shared/table/table.service';
import { Device } from '../../../models/entities/interfaces/maps.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface DeviceFilter {
  text: string;
  status: string;
  type: string;
}

@Injectable({
  providedIn: 'root',
})
export class DeviceService implements PaginationService<Device, DeviceFilter> {
  constructor(private http: HttpClient) {}

  getList(params: SearchParams<DeviceFilter>): Observable<ListData<Device>> {
    console.log(params.filter);
    return this.http.post<ListData<Device>>('/rest/v1/rpc/get_devices_ordered', {
      filter: params.filter,
      limit_value: params.startItem,
      offset_value: params.skip,
    });
  }
}
