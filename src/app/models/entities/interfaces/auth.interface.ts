import { FormControl } from '@angular/forms';

export interface Auth {
  email: string;
  password: string;
}

export interface AuthForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}
