import { MapMeta } from './maps.interface';
import { FormControl } from '@angular/forms';

export interface Booking {
  name: FormControl<string | null>;
  phone: FormControl<number | null>;
  login: FormControl<string | null>;
  packet: FormControl<Packet | null>;
  time: FormControl<string | null>;
  zone: FormControl<MapMeta[] | null>;
  device: FormControl<number | null>;
}

export enum Packet {
  one = 'one',
  three = 'three',
  night = 'night',
  allDay = 'all day',
}
