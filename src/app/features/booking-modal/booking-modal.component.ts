import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Organization } from '../../models/entities/interfaces/maps.interface';
import { MapsService } from '../map-hall/services/maps.service';
import { BookingForm, Packet } from '../../models/entities/interfaces/bookingForm';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrl: './booking-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingModalComponent {
  booking: FormGroup;
  mapSubject: Observable<Organization>;

  enums = {
    Packet,
  };

  constructor(
    private mapsService: MapsService,
    private dialog: MatDialogRef<BookingModalComponent>,
    private changeDetectionRef: ChangeDetectorRef,
  ) {
    this.mapSubject = this.mapsService.getOrganizationNoBack();
    this.booking = new FormGroup<BookingForm>({
      name: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      packet: new FormControl(null, [Validators.required]),
      login: new FormControl(null, []),
      zone: new FormControl(null, [Validators.required]),
      time: new FormControl(null, [Validators.required]),
      device: new FormControl(null, [Validators.required]),
    });
  }

  createBooking() {
    if (this.booking.valid) {
      this.mapsService.postBooking(this.booking.value).subscribe(() => {
        this.changeDetectionRef.detectChanges();
      });
      this.changeDetectionRef.detectChanges();
      this.dialog.close();
    } else {
      this.booking.markAllAsTouched();
    }
  }
}
