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
  phone: number;
  tariff: string;
  time: string;
  level: number;
}

// enum с type pc/ps

export enum DeviceStatus {
  Free,
  Busy,
  Empty,
}
// возможно стоит в отделньый файл статусы
