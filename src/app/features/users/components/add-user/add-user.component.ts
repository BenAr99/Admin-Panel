import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserForm } from '../../../../models/entities/interfaces/maps.interface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddUserComponent {
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup<UserForm>({
      name: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      login: new FormControl(null, [Validators.required]),
    });
  }
}
