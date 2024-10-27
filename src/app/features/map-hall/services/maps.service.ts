import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Device,
  MapDetails,
  Organization,
} from '../../../models/entities/interfaces/maps.interface';
import { map, Observable, of, tap, timer } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Booking, BookingForm } from '../../../models/entities/interfaces/bookingForm.interface';
import { log } from '@angular-devkit/build-angular/src/builders/ssr-dev-server';

@Injectable({
  providedIn: 'root',
})
export class MapsService {
  constructor(private http: HttpClient) {}

  organization: Organization = {
    uuid: '5ec0f1a9-c31b-472b-aa00-263098179b91',
    name: 'Name org',
    map: [
      {
        uuid: '4ab2ac8e-b459-411b-a15c-524b00945c6d',
        name: 'Bootcamp',
      },
      {
        uuid: '5401f19d-cb0e-4524-a99c-e7b7c3694396',
        name: 'VIP',
      },
      {
        uuid: 'bddd5aba-2a20-4f7d-903f-107260c2373d',
        name: 'Normal',
      },
    ],
  };

  getMaps(id: string): Observable<Organization> {
    return this.http.get<Organization>(`http://localhost:8080/maps/${id}`);
  }

  // Берем карты всей организации, т.е тут id - индефикация организация
  getOrganizationNoBack(): Observable<Organization> {
    return timer(100).pipe(
      map((): Organization => {
        return this.organization;
      }),
    );
  }

  // Как бы если запрос будет идти от какого-либо uuid, это будет вставляться,
  // будет выдаваться нужныая карта

  getMapNoBack(uuid: string): Observable<MapDetails | null> {
    if (uuid === '4ab2ac8e-b459-411b-a15c-524b00945c6d') {
      return timer(200).pipe(
        map((): MapDetails => {
          return JSON.parse(localStorage.getItem('mapBootcamp') as string);
          //плохая практика as string вместо if (null)?
          // иль getItem('mapBootcamp') ?? '[]'
        }),
      );
    }
    if (uuid === '5401f19d-cb0e-4524-a99c-e7b7c3694396') {
      return timer(200).pipe(
        map((): MapDetails => {
          return JSON.parse(localStorage.getItem('mapVip') as string);
        }),
      );
    }
    if (uuid === 'bddd5aba-2a20-4f7d-903f-107260c2373d') {
      return timer(200).pipe(
        map((): MapDetails => {
          return JSON.parse(localStorage.getItem('mapNormal') as string);
        }),
      );
    }
    return of(null);
  }

  postBooking(bookingFormGroup: Booking) {
    return timer(300).pipe(
      tap((): void => {
        const mapBootcamp: MapDetails = JSON.parse(localStorage.getItem('mapBootcamp') as string);
        mapBootcamp.devices[0].user = {
          name: bookingFormGroup.name,
          phone: bookingFormGroup.phone,
          tariff: bookingFormGroup.packet,
          time: bookingFormGroup.time,
          level: 0.0556778567856,
        };
        localStorage.setItem('mapBootcamp', JSON.stringify(mapBootcamp));

        console.log(mapBootcamp);
      }),
    );
  }
}
