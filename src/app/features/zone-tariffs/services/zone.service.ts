import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device, MapDetails } from '../../../models/entities/interfaces/maps.interface';

export interface ZoneDevicesResponse {
  zone_name: string;
  devices: Device[];
}

@Injectable({
  providedIn: 'root',
})
export class ZoneService {
  constructor(private http: HttpClient) {}

  getZones(): Observable<MapDetails[]> {
    return this.http.get<MapDetails[]>('/rest/v1/rpc/get_zones_with_device_count');
  }

  getDevices(zone_id: string | null): Observable<ZoneDevicesResponse> {
    return this.http.post<ZoneDevicesResponse>('/rest/v1/rpc/get_devices_by_zone', {
      p_zone_id: zone_id,
    });
  }

  deleteDeviceFromZone(device: Device): Observable<Device> {
    return this.http.post<Device>(`/rest/v1/rpc/update_device`, {
      device_data: {
        id: device.id,
        status: device.status,
        name: device.name,
        ip_address: device.ip_address,
        zone_id: null,
      },
    });
  }
}
