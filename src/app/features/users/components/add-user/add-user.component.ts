import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserForm } from '../../../../models/entities/interfaces/maps.interface';
import { MatDialogRef } from '@angular/material/dialog';
import { MaskitoOptions } from '@maskito/core';
import maskPhone from '../../../../shared/maskito/phone';
import { phoneValidator } from '../../../../shared/validators/phone';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddUserComponent {
  readonly maskitoOptions: MaskitoOptions = maskPhone;
  userForm: FormGroup;

  constructor(private matDialogRef: MatDialogRef<AddUserComponent>) {
    this.userForm = new FormGroup<UserForm>({
      name: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required, phoneValidator]),
      login: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  add() {
    if (this.userForm.valid) {
      this.matDialogRef.close(this.userForm.value);
    }
  }
}
