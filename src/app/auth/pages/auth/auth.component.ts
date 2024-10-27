import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthForm } from '../../../models/entities/interfaces/auth.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { upLowCase } from '../../../shared/validators/upLowCase';

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
    private afAuth: AngularFireAuth,
    private router: Router,
    private activeRoute: ActivatedRoute,
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
    console.log(this.auth.errors, 'this.auth.errors');
    console.log(this.auth.controls['password'].errors, "this.auth.controls['password'].errors");
    console.log(this.auth, 'auth');
    console.log(this.auth.hasError('upLowCase'), 'hasError');
    console.log(
      this.auth.controls['password'].hasError('upLowCase').valueOf(),
      "hasError('password')",
    );
    if (this.auth.valid) {
      console.log(this.auth.value.login, this.auth.value.password);
      this.afAuth
        .createUserWithEmailAndPassword(this.auth.value.login, this.auth.value.password)
        .then(() => {
          const params = this.activeRoute.snapshot.queryParams;
          this.previousUrl = params['currentUrl'] || '/';
          this.router.navigate([this.previousUrl]);
        });
    }
  }
}
