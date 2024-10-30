import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  CanActivate,
  NavigationEnd,
  NavigationStart,
  Router,
  UrlTree,
} from '@angular/router';
import { filter, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  url?: string;

  constructor(private router: Router) {
    console.log('test');
  }

  canActivate(): boolean | UrlTree {
    console.log('test');
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationStart),
        tap((event) => {
          this.url = (event as NavigationStart).url;
        }),
      )
      .subscribe();
    if (localStorage.getItem('accessToken') !== null) {
      return true;
    }

    return this.router.createUrlTree(['auth'], { queryParams: { currentUrl: this.url } });
  }
}
