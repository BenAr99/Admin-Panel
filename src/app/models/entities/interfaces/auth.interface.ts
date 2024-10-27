import { FormControl } from '@angular/forms';

export interface Auth {
  login: string;
  password: string;
}

export interface AuthForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}
