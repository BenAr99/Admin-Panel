import { Directive, HostBinding, Input, OnChanges } from '@angular/core';
import { DeviceStatus } from '../../../models/entities/interfaces/maps.interface';

@Directive({
  selector: '[appStatusDevice]',
})
export class StatusDeviceDirective implements OnChanges {
  @Input() appStatusDevice?: DeviceStatus;
  @HostBinding('style.border') border?: string;
  constructor() {}

  ngOnChanges() {
    if (this.appStatusDevice === DeviceStatus.Active) {
      this.border = '2px solid rgba(255, 100, 100, 1)';
    }
    if (this.appStatusDevice === DeviceStatus.Inactive) {
      this.border = '2px solid rgba(0, 100, 0, 0.8)';
    }
    if (this.appStatusDevice === DeviceStatus.Service) {
      this.border = '2px solid rgb(255, 165, 0)';
    }
    if (this.appStatusDevice === DeviceStatus.Empty) {
      this.border = '2px solid #6c6c6c';
    }
  }
}
