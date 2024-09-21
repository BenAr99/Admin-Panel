export interface Organization {
  uuid: string;
  name: string;
  map: MapMeta[];
}

export interface MapDetails {
  uuid: string;
  name: string;
  width: number;
  height: number;
  price: number;
  devices: Device[];
}

export interface MapMeta {
  uuid: string;
  name: string;
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
  phone: number;
  tariff: string;
  time: string;
  level: number;
}

export enum DeviceStatus {
  Free,
  Busy,
  Empty,
}
// возможно стоит в отделньый файл статусы
