import { FormControl } from '@angular/forms';

//todo Так и оставить тут интерфейсы? Или разделить по их папкам?

export interface MapDetails {
  id: string;
  name: string;
  width: number;
  height: number;
  price: number;
  count_device?: number;
}

export interface Device {
  id: string;
  type: string;
  name: string;
  user?: User;
  status: DeviceStatus;
  mac_ip: string;
  ip_address: string;
  zone?: {
    name: string;
    id: string;
  };
}

export interface User {
  name: string;
  login: string;
  phone: string;
  tariff: string;
  time: string;
  level: number;
  balance: number;
}

export interface History {
  device: Device;
  user: User;
  start_date: Date;
  end_date: Date;
}

export interface UserForm {
  name: FormControl<string | null>;
  login: FormControl<string | null>;
  phone: FormControl<string | null>;
}

// enum с type pc/ps

export enum DeviceType {
  ps = 'ps',
  pc = 'pc',
}

export enum DeviceStatus {
  Active = 'active',
  Inactive = 'inactive',
  Service = 'service',
  Empty = 'empty',
}
// возможно стоит в отделньый файл статусы
