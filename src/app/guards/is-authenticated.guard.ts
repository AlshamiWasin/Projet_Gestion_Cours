import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanActivateChild
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedGuard implements CanActivate, CanActivateChild {

  constructor(private _router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const session = sessionStorage.getItem('user');

    if (!session) {
      this._router.navigate(['login']);
    }

    return true;
  }

  // canDeactivate(childRoute: ActivatedRouteSnapshot,
  //               state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //
  //   // const session = sessionStorage.getItem('user');
  //   //
  //   // if (session) {
  //   //   return false;
  //   // }
  //
  //   return true;

  // };


  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const session = sessionStorage.getItem('user');

      if (!session) {
        this._router.navigate(['..']);
      }

      return true;
  }

}
