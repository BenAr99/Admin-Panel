import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MapHallComponent } from './features/map-hall/map-hall.component';
import { ZoneTariffsComponent } from './features/zone-tariffs/zone-tariffs.component';
import { HistoryComponent } from './features/history/history.component';
import { UsersComponent } from './features/users/users.component';
import { NotificationModalComponent } from './features/notification-modal/notification-modal.component';
import { CardBookingComponent } from './features/card-booking/card-booking.component';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { DefaultModule } from './shared/layout/default.module';
import { TableMapComponent } from './features/map-hall/components/table-map/table-map.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeviceCellComponent } from './features/map-hall/components/device-cell/device-cell.component';
import { DeviceBookingPreviewComponent } from './features/map-hall/components/device-booking-preview/device-booking-preview.component';
import { BookingPreviewBlockComponent } from './features/map-hall/components/booking-preview-block/booking-preview-block.component';
import { BookingModalComponent } from './features/booking-modal/booking-modal.component';
import { DeviceStatus, MapDetails } from './models/entities/interfaces/maps.interface';
import { RouterOutlet } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConfig } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [
    AppComponent,
    MapHallComponent,
    ZoneTariffsComponent,
    HistoryComponent,
    UsersComponent,
    NotificationModalComponent,
    CardBookingComponent,
    TableMapComponent,
    DeviceCellComponent,
    DeviceBookingPreviewComponent,
    BookingPreviewBlockComponent,
    BookingModalComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AuthModule,
    AppRoutingModule,
    DefaultModule,
    BrowserAnimationsModule,
    MatDialogContent,
    MatDialogTitle,
    MatDialogClose,
    MatButtonModule,
    MatDialogActions,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {
  mapBootcamp: MapDetails = {
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
        uuid: '',
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
  mapVip: MapDetails = {
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
  mapNormal: MapDetails = {
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
  constructor() {
    localStorage.setItem('mapBootcamp', JSON.stringify(this.mapBootcamp));
    localStorage.setItem('mapVip', JSON.stringify(this.mapVip));
    localStorage.setItem('mapNormal', JSON.stringify(this.mapNormal));
  }
}
