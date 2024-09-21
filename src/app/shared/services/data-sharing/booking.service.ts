import { Injectable } from '@angular/core';
import { IBookingNotification } from '../../../models/entities/interfaces/IBookingNotification';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  // SR: Пофиксить в запрос
  public bookingNotifications: IBookingNotification[] = [
    {
      id: 1,
      userName: 'Darkhan',
      zone: 'Standard room',
      tariff: 'Ночной',
      timeFrom: new Date(2023, 12, 12, 21, 30, 0),
      timeTo: new Date(2023, 12, 12, 23, 30, 0),
    },
    {
      id: 2,
      userName: 'Nurlan',
      zone: 'Playstation room',
      tariff: 'Ночной',
      timeFrom: new Date(2023, 12, 12, 21, 30, 0),
      timeTo: new Date(2023, 12, 12, 23, 30, 0),
    },
  ];
}
