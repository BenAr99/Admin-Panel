import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Device } from '../../../../models/entities/interfaces/maps.interface';

@Component({
  selector: 'app-device-booking-preview',
  templateUrl: './device-booking-preview.component.html',
  styleUrl: './device-booking-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeviceBookingPreviewComponent implements OnInit {
  @Input() cell!: Device;
  constructor() {}

  ngOnInit() {
    console.log(this.cell, 'celllllllll');
  }
}
