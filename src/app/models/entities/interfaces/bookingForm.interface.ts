import { FormControl } from '@angular/forms';

export interface BookingForm {
  userName: FormControl<string | null>;
  phone: FormControl<number | null>;
  zone: FormControl<string | null>;
  device: FormControl<number | null>;
}

export interface Booking {
  userName: string;
  phone: number;
  zone: string;
  device: number;
}
