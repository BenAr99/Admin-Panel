import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Device, MapDetails } from '../../../../models/entities/interfaces/maps.interface';

@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrl: './device-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeviceEditComponent {
  deviceForm: FormGroup;
  device: Device;
  zones: MapDetails[];

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { device: Device; zones: MapDetails[] },
    private matDialogRef: MatDialogRef<DeviceEditComponent>,
  ) {
    this.device = this.data.device;
    this.zones = this.data.zones;
    this.deviceForm = new FormGroup({
      id: new FormControl(this.device.id, [Validators.required]),
      name: new FormControl(this.device.name, [Validators.required]),
      zone: new FormControl(this.device.zone?.id, [Validators.required]),
      status: new FormControl(this.device.status, [Validators.required]),
      ip_address: new FormControl(this.device.ip_address, [Validators.required]),
    });
  }

  edit() {
    if (this.deviceForm.valid) {
      this.matDialogRef.close(this.deviceForm.value);
    }
  }
}
