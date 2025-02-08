import { FormControl } from '@angular/forms';

export interface MapDetails {
  id: string;
  name: string;
  width: number;
  height: number;
  price: number;
}

export interface Device {
  uuid: string;
  type: string;
  name: string;
  user: User | null;
  status: DeviceStatus;
}

export interface User {
  name: string;
  login: string;
  phone: number;
  tariff: string;
  time: string;
  level: number;
  balance: number;
}

export interface UsersData {
  totalCount: number;
  users: User[];
}

export interface UserSearchParams {
  searchValue: string;
  startItem: number;
  skip: number;
}

export interface UserForm {
  name: FormControl<string | null>;
  login: FormControl<string | null>;
  phone: FormControl<string | null>;
}

// enum с type pc/ps

export enum DeviceStatus {
  Active = 'active',
  Inactive = 'inactive',
  Service = 'service',
  Empty = 'empty',
}
// возможно стоит в отделньый файл статусы
