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
import { EntityDetailsComponent } from './shared/components/entity-details-component/entity-details.component';
import { EntityDetailsBlockComponent } from './shared/components/entity-details-block/entity-details-block.component';
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
import { ScrollPaginationDirective } from './shared/table/scroll-pagination.directive';
import { HistoryTableComponent } from './features/history/components/history-table/history-table.component';
import { ShellHistoryDetailsComponent } from './features/history/components/shell-history-details/shell-history-details.component';
import {
  MatCalendar,
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle,
} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ZoneTableComponent } from './features/zone-tariffs/components/zone-table/zone-table.component';
import { ZoneDetailsComponent } from './features/zone-tariffs/page/zone-details/zone-details.component';
import { DeviceTableComponent } from './features/device/components/device-table/device-table.component';
import { DeviceComponent } from './features/device/device.component';
import { DeviceEditComponent } from './features/device/components/device-edit/device-edit.component';
import { DeviceCreateComponent } from './features/device/components/device-create/device-create.component';

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
    EntityDetailsComponent,
    EntityDetailsBlockComponent,
    BookingModalComponent,
    StatusDeviceDirective,
    UserTableComponent,
    AddUserComponent,
    DialogComponent,
    HistoryTableComponent,
    ShellHistoryDetailsComponent,
    ZoneTableComponent,
    ZoneDetailsComponent,
    DeviceComponent,
    DeviceTableComponent,
    DeviceEditComponent,
    DeviceCreateComponent,
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
    ScrollPaginationDirective,
    MatDatepicker,
    MatDatepickerToggle,
    MatDatepickerInput,
    MatNativeDateModule,
    MatCalendar,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
