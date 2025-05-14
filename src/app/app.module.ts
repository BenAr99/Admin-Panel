import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntityDetailsComponent } from './shared/components/entity-details-component/entity-details.component';
import { EntityDetailsBlockComponent } from './shared/components/entity-details-block/entity-details-block.component';
import { BookingModalComponent } from './features/booking-modal/booking-modal.component';
import { RouterOutlet } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
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
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { MaskitoDirective } from '@maskito/angular';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ScrollPaginationDirective } from './shared/table/scroll-pagination.directive';
import {
  MatCalendar,
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle,
} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [AppComponent, BookingModalComponent],
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
    DialogComponent,
    EntityDetailsComponent,
    EntityDetailsBlockComponent,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
