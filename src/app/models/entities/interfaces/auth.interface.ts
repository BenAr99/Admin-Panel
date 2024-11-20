import { FormControl } from '@angular/forms';

export interface Auth {
  email: string;
  password: string;
}

export interface AuthForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

export interface getToken {
  access_token: string;
  refresh_token: string;
  expires_at: number;
  expires_in: number;
}
