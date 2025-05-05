import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Device } from '../../../../models/entities/interfaces/maps.interface';

@Component({
  selector: 'app-device-table',
  templateUrl: './device-table.component.html',
  styleUrl: './device-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeviceTableComponent {
  @Output() dialogEdit = new EventEmitter<string>();
  @Output() rowDeleted = new EventEmitter<string>();
  @Input() data: Device[] = [];
  titleColumns: string[] = [
    'position',
    'name',
    'zone_name',
    'type',
    'status',
    'ip_address',
    'mac_ip',
    'edit',
    'delete',
  ];

  constructor() {}

  edit(id: string) {
    this.dialogEdit.emit(id);
  }

  delete(id: string): void {
    this.rowDeleted.emit(id);
  }
}
