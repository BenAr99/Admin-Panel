import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  DeviceStatus,
  MapDetails,
  Organization,
} from '../models/entities/interfaces/maps.interface';
import { map, Observable, of, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapsService {
  constructor(private http: HttpClient) {}

  test = 11;

  getMaps(id: string): Observable<Organization> {
    return this.http.get<Organization>(`http://localhost:8080/maps/${id}`);
  }

  // Берем карты всей организации, т.е тут id - индефикация организация
  getOrganizationNoBack(): Observable<Organization> {
    return timer(1000).pipe(
      map((): Organization => {
        return {
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
      }),
    );
  }

  // Как бы если запрос будет идти от какого-либо uuid, это будет вставляться,
  // будет выдаваться нужныая карта

  // 19.09 столкнулся с тем, что в user передавать name/phone - недостаточно,
  // поэтому передаю еще какой тариф действует у пользователя +
  // остаток времени/уровень(скидка)
  // Нужно продумать типы, особенно time
  getMapNoBack(uuid: string): Observable<MapDetails | null> {
    if (uuid === '4ab2ac8e-b459-411b-a15c-524b00945c6d') {
      return timer(1000).pipe(
        map((): MapDetails => {
          return {
            uuid: '4ab2ac8e-b459-411b-a15c-524b00945c6d',
            name: 'Bootcamp',
            width: 6,
            height: 5,
            price: 300,
            devices: [
              {
                uuid: 'cd135d97-e4e5-43bb-a72f-7c9e5d85adc2',
                type: 'ps',
                name: '1',
                status: DeviceStatus.Busy,
                user: {
                  name: 'АлексейТест',
                  phone: 745635,
                  tariff: 'Ночной',
                  time: '57 минут',
                  level: 0.3,
                },
              },
              {
                uuid: 'a17352ad-4825-4866-9d44-fc7940e441e2',
                type: 'pc',
                name: '2',
                status: DeviceStatus.Free,
                user: null,
              },
              {
                uuid: 'void',
                type: 'void',
                name: 'void',
                status: DeviceStatus.Empty,
                user: null,
              },
              {
                uuid: 'void',
                type: 'void',
                name: 'void',
                status: DeviceStatus.Empty,
                user: null,
              },
              {
                uuid: 'void',
                type: 'void',
                name: 'void',
                status: DeviceStatus.Empty,
                user: null,
              },
              {
                uuid: 'void',
                type: 'void',
                name: 'void',
                status: DeviceStatus.Empty,
                user: null,
              },
              {
                uuid: '08acf770-c93b-4533-9167-355cd34423b7',
                type: 'ps',
                name: '3',
                status: DeviceStatus.Busy,
                user: {
                  name: 'Петsdfsdfdsadfasdfadsfasfsadfasdfdsafdsfafasdsfsdfя',
                  phone: 12345,
                  tariff: 'Дневной',
                  time: '20 минут',
                  level: 0.1,
                },
              },
              {
                uuid: 'void',
                type: 'void',
                name: 'void',
                status: DeviceStatus.Empty,
                user: null,
              },
              {
                uuid: 'void',
                type: 'void',
                name: 'void',
                status: DeviceStatus.Empty,
                user: null,
              },
            ],
          };
        }),
      );
    }
    if (uuid === '5401f19d-cb0e-4524-a99c-e7b7c3694396') {
      return timer(1000).pipe(
        map((): MapDetails => {
          return {
            uuid: '5401f19d-cb0e-4524-a99c-e7b7c3694396',
            name: 'VIP',
            width: 2,
            height: 3,
            price: 300,
            devices: [
              {
                uuid: 'c708af42-8eac-4c3d-b1a6-58170ca98ce6',
                type: 'pc',
                name: '1 место',
                status: DeviceStatus.Busy,
                user: {
                  name: 'Вася',
                  phone: 123453425,
                  tariff: 'Ночной',
                  time: '57 минут',
                  level: 0.3,
                },
              },
              {
                uuid: '063f72eb-6051-4b89-aa32-7a6109822a04',
                type: 'ps',
                name: '2 место',
                status: DeviceStatus.Busy,
                user: {
                  name: 'ДиванМолодой',
                  phone: 23542346,
                  tariff: 'Ночной',
                  time: '423 минут',
                  level: 0.5,
                },
              },
              {
                uuid: 'a5cede19-25be-40c2-b87a-da4616d1299a',
                type: 'pc',
                name: '3 место',
                status: DeviceStatus.Free,
                user: null,
              },
              {
                uuid: '811d643c-2b86-4b06-bef6-e5214e42f254',
                type: 'ps',
                name: '4 место',
                status: DeviceStatus.Busy,
                user: {
                  name: 'Вася',
                  phone: 123453425,
                  tariff: 'Ночной',
                  time: '123 минут',
                  level: 0.125,
                },
              },
            ],
          };
        }),
      );
    }
    if (uuid === 'bddd5aba-2a20-4f7d-903f-107260c2373d') {
      return timer(1000).pipe(
        map((): MapDetails => {
          return {
            uuid: 'bddd5aba-2a20-4f7d-903f-107260c2373d',
            name: 'Normal',
            width: 2,
            height: 2,
            price: 300,
            devices: [
              {
                uuid: '19e90ba4-35a1-4237-956f-f4a2f63a6b5b',
                type: 'pc',
                name: '1 место',
                status: DeviceStatus.Free,
                user: null,
              },
              {
                uuid: '7a338cf0-af16-4473-9c3e-e01f171db7cf',
                type: 'ps',
                name: '2 место',
                status: DeviceStatus.Free,
                user: null,
              },
              {
                uuid: 'void',
                type: 'void',
                name: 'void',
                status: DeviceStatus.Empty,
                user: null,
              },
              {
                uuid: 'void',
                type: 'void',
                name: 'void',
                status: DeviceStatus.Empty,
                user: null,
              },
              {
                uuid: '7eb5d22d-cf3c-43bf-af8c-fd454657170e',
                type: 'pc',
                name: '3 место',
                status: DeviceStatus.Free,
                user: null,
              },
              {
                uuid: '8b7216ce-8242-4ca0-a8c0-681f50579622',
                type: 'ps',
                name: '4 место',
                status: DeviceStatus.Free,
                user: null,
              },
            ],
          };
        }),
      );
    }
    return of(null);
  }
}
