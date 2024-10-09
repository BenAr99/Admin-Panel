import { FormControl } from '@angular/forms';

export interface BookingForm {
  name: FormControl<string | null>;
  phone: FormControl<number | null>;
  login: FormControl<string | null>;
  packet: FormControl<Packet | null>;
  time: FormControl<string | null>;
  zone: FormControl<string | null>;
  device: FormControl<number | null>;
}

export interface Booking {
  name: string;
  phone: number;
  login: string;
  packet: Packet;
  time: string;
  zone: string;
  device: string;
}

export enum Packet {
  one = 'one',
  three = 'three',
  night = 'night',
  allDay = 'all day',
}
