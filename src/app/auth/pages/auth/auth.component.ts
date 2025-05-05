import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthForm } from '../../../models/entities/interfaces/auth.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { upLowCase } from '../../../shared/validators/upLowCase';
import { AuthService } from '../../service/auth.service';
import { LocalStorageService } from '../../service/local-storage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  auth: FormGroup;
  previousUrl?: string;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
  ) {
    this.auth = new FormGroup<AuthForm>({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(100),
        upLowCase(),
      ]),
    });
  }

  onSubmit() {
    if (this.auth.valid) {
      this.authService
        .postAuth({ email: this.auth.value.email, password: this.auth.value.password })
        .subscribe((value) => {
          this.localStorageService.setToken(value.access_token, value.refresh_token);
          this.authService.updateRefreshTokenAfter(value.expires_in);
          const params = this.activeRoute.snapshot.queryParams;
          this.previousUrl = params['currentUrl'] || '/';
          this.router.navigate([this.previousUrl]);
        });
    }
  }
}
