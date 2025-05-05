import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { LocalStorageService } from './service/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    if (this.localStorageService.getAccessTokenLocalStorage() !== null) {
      return true;
    }
    return this.router.createUrlTree(['auth'], { queryParams: { currentUrl: state.url } });
  }
}
