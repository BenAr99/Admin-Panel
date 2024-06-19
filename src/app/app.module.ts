import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
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
import { CellCardComponent } from './shared/components/cell-card/cell-card.component';
import { DefaultModule } from './shared/layout/default.module';
import { CreateMapDirective } from './shared/directives/create-map.directive';
import { TableMapComponent } from './features/map-hall/table-map/table-map.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogContent,
    MatDialogTitle,
    MatDialogClose,
    MatButtonModule,
    MatDialogActions,
    MatGridListModule,
    MatIconModule,
    CellCardComponent,
    CreateMapDirective,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
