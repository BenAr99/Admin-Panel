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
import { RouterOutlet } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { StatusDeviceDirective } from './features/map-hall/directives/status-device.directive';
import { CoreModule } from './core/core.module';
import { UserTableComponent } from './features/users/components/user-table/user-table.component';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';
import { NgOptimizedImage } from '@angular/common';
import { AddUserComponent } from './features/users/components/add-user/add-user.component';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { MaskitoDirective } from '@maskito/angular';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

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
    StatusDeviceDirective,
    UserTableComponent,
    AddUserComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
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
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatTable,
    MatHeaderRow,
    MatRow,
    MatHeaderCellDef,
    MatCellDef,
    MatRowDef,
    MatHeaderRowDef,
    NgOptimizedImage,
    MaskitoDirective,
    MatProgressSpinner,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
