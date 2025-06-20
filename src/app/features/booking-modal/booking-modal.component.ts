import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MapsService } from '../map-hall/services/maps.service';
import { BookingForm } from '../../models/entities/interfaces/bookingForm.interface';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { MapDetails } from '../../models/entities/interfaces/maps.interface';
import { TriggerBookingService } from './services/trigger-booking.service';

@Component({
  selector: 'app-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrl: './booking-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingModalComponent {
  booking: FormGroup;
  mapSubject: Observable<MapDetails[]>;

  constructor(
    private mapsService: MapsService,
    private dialog: MatDialogRef<BookingModalComponent>,
    private triggerBookingService: TriggerBookingService,
  ) {
    this.mapSubject = this.mapsService.getMaps();
    this.booking = new FormGroup<BookingForm>({
      userName: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      zone: new FormControl(null, [Validators.required]),
      device: new FormControl(null, [Validators.required]),
    });
  }

  createBooking() {
    if (this.booking.valid) {
      this.mapsService.postBooking(this.booking.value).subscribe(() => {
        this.triggerBookingService.triggerChange();
      });
      this.dialog.close();
    } else {
      this.booking.markAllAsTouched();
    }
  }
}
