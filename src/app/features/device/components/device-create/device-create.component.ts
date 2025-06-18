import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MapDetails } from '../../../../models/entities/interfaces/maps.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-device-create',
  templateUrl: './device-create.component.html',
  styleUrl: './device-create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeviceCreateComponent {
  deviceForm: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: MapDetails[],
    private matDialogRef: MatDialogRef<DeviceCreateComponent>,
  ) {
    this.deviceForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      zone: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      ip_address: new FormControl('', [Validators.required]),
      mac_ip: new FormControl('', [Validators.required]),
    });
  }

  create() {
    if (this.deviceForm.valid) {
      this.matDialogRef.close(this.deviceForm.value);
    }
  }
}
