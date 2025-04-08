import { DeviceStatus, DeviceType } from '../../models/entities/interfaces/maps.interface';

interface Option {
  value: DeviceType | DeviceStatus;
  label: string;
}

export const TYPE_OPTION: Option[] = [
  {
    label: 'PS',
    value: DeviceType.ps,
  },
  {
    label: 'PC',
    value: DeviceType.pc,
  },
];

export const STATUS_OPTION: Option[] = [
  {
    label: 'Активный',
    value: DeviceStatus.Active,
  },
  {
    label: 'Неактивный',
    value: DeviceStatus.Inactive,
  },
  {
    label: 'Тех.Неполадки',
    value: DeviceStatus.Service,
  },
];
