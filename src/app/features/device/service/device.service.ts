import { Injectable } from '@angular/core';
import { ListData, PaginationService, SearchParams } from '../../../shared/table/table.service';
import { Device, MapDetails } from '../../../models/entities/interfaces/maps.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface DeviceFilter {
  name: string;
  text: string;
  status: string;
  type: string;
}

@Injectable({
  providedIn: 'root',
})
export class DeviceService implements PaginationService<Device, DeviceFilter> {
  constructor(private http: HttpClient) {}

  getMaps(): Observable<MapDetails[]> {
    return this.http.get<MapDetails[]>('/rest/v1/zones', {});
  }

  getDevice(id: string): Observable<Device> {
    return this.http.post<Device>(`/rest/v1/rpc/get_device_by_id`, {
      p_id: id,
    });
  }

  createDevice(device: Device): Observable<Device> {
    return this.http.post<Device>(`/rest/v1/rpc/create_device`, {
      device_data: {
        name: device.name,
        type: device.type,
        status: device.status,
        mac_ip: device.mac_ip,
        ip_address: device.ip_address,
        zone_id: device.zone,
      },
    });
  }

  deleteDevice(id: string): Observable<void> {
    return this.http.post<void>('/rest/v1/rpc/delete_device', {
      row_id: id,
    });
  }

  edit(device: Device): Observable<Device> {
    return this.http.post<Device>(`/rest/v1/rpc/update_device`, {
      device_data: {
        id: device.id,
        status: device.status,
        name: device.name,
        ip_address: device.ip_address,
        zone_id: device.zone,
      },
    });
  }

  getList(params: SearchParams<DeviceFilter>): Observable<ListData<Device>> {
    return this.http.post<ListData<Device>>('/rest/v1/rpc/get_devices_ordered', {
      filter: params.filter,
      limit_value: params.startItem,
      offset_value: params.skip,
    });
  }
}
