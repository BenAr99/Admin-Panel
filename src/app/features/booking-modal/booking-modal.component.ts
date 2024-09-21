import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MapMeta } from '../../models/entities/interfaces/maps.interface';
import { MapsService } from '../map-hall/services/maps.service';
import { Booking, Packet } from '../../models/entities/interfaces/booking';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrl: './booking-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingModalComponent {
  mapMetas!: MapMeta[];
  booking: FormGroup;

  enums = {
    Packet,
  };

  constructor(
    private mapsService: MapsService,
    private dialog: MatDialogRef<BookingModalComponent>,
  ) {
    this.mapsService.getOrganizationNoBack().subscribe((value) => (this.mapMetas = value.map));
    this.booking = new FormGroup<Booking>({
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
      this.dialog.close();
      console.log(this.booking.value);
    } else {
      this.booking.markAllAsTouched();
    }
  }
}
