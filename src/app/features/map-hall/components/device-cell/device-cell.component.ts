import { Component, Input } from '@angular/core';
import { Device, DeviceStatus } from '../../../../models/entities/interfaces/maps.interface';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-device-cell',
  templateUrl: './device-cell.component.html',
  styleUrl: './device-cell.component.scss',
})
export class DeviceCellComponent {
  @Input() cell!: Device;

  hover?: boolean;
  private mouseEnterSubject = new Subject<boolean>();
  constructor() {
    this.mouseEnterSubject.pipe(debounceTime(300)).subscribe((value) => {
      this.hover = value;
    });
  }
  hidden(value: boolean) {
    console.log(this.hover);
    this.mouseEnterSubject.next(value);
  }

  enums = {
    DeviceStatus,
  };
}
