import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './pages/auth/auth.component';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthErrorInterceptor } from './interceptors/auth-error.interceptor';
import { ExitComponent } from './pages/exit/exit.component';

@NgModule({
  declarations: [AuthComponent, ExitComponent],
  imports: [
    CommonModule,
    MatLabel,
    MatFormField,
    ReactiveFormsModule,
    MatInput,
    MatButton,
    MatError,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthErrorInterceptor, multi: true },
  ],
})
export class AuthModule {}
