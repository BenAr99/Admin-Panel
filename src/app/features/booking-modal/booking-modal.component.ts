import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MapsService } from '../map-hall/services/maps.service';
import { BookingForm } from '../../models/entities/interfaces/bookingForm.interface';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { MapDetails } from '../../models/entities/interfaces/maps.interface';

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
    private changeDetectionRef: ChangeDetectorRef,
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
      console.log(this.booking.value);
      this.mapsService
        .postBooking({
          NEW_zone_id: this.booking.value.zone_id,
          NEW_nameDevice: this.booking.value.nameDevice,
          NEW_user_phone: this.booking.value.userPhone,
          NEW_user_name: this.booking.value.userName,
        })
        .subscribe(() => {
          this.changeDetectionRef.detectChanges();
        });
      this.dialog.close();
    } else {
      this.booking.markAllAsTouched();
    }
  }
}
