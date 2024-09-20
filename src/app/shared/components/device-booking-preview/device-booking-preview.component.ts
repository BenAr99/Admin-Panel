import { Component, Input } from '@angular/core';
import { Device } from '../../../models/entities/interfaces/maps.interface';

@Component({
  selector: 'app-device-booking-preview',
  templateUrl: './device-booking-preview.component.html',
  styleUrl: './device-booking-preview.component.scss',
})
export class DeviceBookingPreviewComponent {
  @Input() cell!: Device;
}
