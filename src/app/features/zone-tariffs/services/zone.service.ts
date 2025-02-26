import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device, MapDetails } from '../../../models/entities/interfaces/maps.interface';

@Injectable({
  providedIn: 'root',
})
export class ZoneService {
  constructor(private http: HttpClient) {}

  getZones(): Observable<MapDetails[]> {
    return this.http.get<MapDetails[]>('/rest/v1/rpc/get_zones_with_device_count');
  }

  getDevices(zone_id: string | null): Observable<Device[]> {
    return this.http.post<Device[]>('/rest/v1/rpc/get_devices_by_zone', {
      p_zone_id: zone_id,
    });
  }

  // editDevice(data) {
  //   this.http.post<Device>(`/rest/v1/rpc/assign_user_to_device`, { data });
  // }
}
