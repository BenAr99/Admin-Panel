import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  CanActivate,
  NavigationEnd,
  NavigationStart,
  Router,
  UrlTree,
} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { filter, map, Observable, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  url?: string;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
  ) {}

  canActivate(): Observable<boolean | UrlTree> {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationStart),
        tap((event) => {
          this.url = (event as NavigationStart).url;
        }),
      )
      .subscribe();
    return this.afAuth.authState.pipe(
      map((user) => {
        if (user) {
          return true;
        } else {
          return this.router.createUrlTree(['auth'], { queryParams: { currentUrl: this.url } });
        }
      }),
    );
  }
}
