import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device, MapDetails } from '../../../models/entities/interfaces/maps.interface';
import { Observable } from 'rxjs';
import { Booking } from '../../../models/entities/interfaces/bookingForm.interface';

@Injectable({
  providedIn: 'root',
})
export class MapsService {
  constructor(private http: HttpClient) {}

  getMaps(): Observable<MapDetails[]> {
    return this.http.get<MapDetails[]>('/rest/v1/zones', {});
  }

  getDevices(id: string): Observable<Device[]> {
    return this.http.post<Device[]>('/rest/v1/rpc/get_sorted_data_by_name', {
      zone_id_param: id,
    });
  }

  postBooking(booking: Booking): Observable<object> {
    return this.http.post('/rest/v1/rpc/assign_user_to_device', {
      new_zone: booking.zone,
      new_name_device: booking.device,
      new_phone: booking.phone,
      new_username: booking.userName,
    });
  }
}
