import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserForm } from '../../../../models/entities/interfaces/maps.interface';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddUserComponent {
  userForm: FormGroup;

  constructor(private matDialogRef: MatDialogRef<AddUserComponent>) {
    this.userForm = new FormGroup<UserForm>({
      name: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      login: new FormControl(null, [Validators.required]),
    });
  }

  add() {
    if (this.userForm.valid) {
      this.matDialogRef.close(this.userForm.value);
    } else if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    }
  }
}
