import { FormControl } from '@angular/forms';

export interface BookingForm {
  userName: FormControl<string | null>;
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
  one = 'По часовой',
  three = 'Три часа',
  night = 'Ночной',
  allDay = 'Весь день',
}
