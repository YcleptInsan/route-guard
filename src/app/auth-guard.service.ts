// import { Injectable } from '@angular/core';
// import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
//
//
// @Injectable()
// export class AuthGuardService implements CanActivate{
//
//   constructor(private router: Router) { }
//   canActivate() {
//     alert("Access denied.")
//     return false;
//   }
// }
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { AuthenticationService } from "./authentication/authentication.service";

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private router: Router, public authService: AuthenticationService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.afAuth.authState
                .take(1)
                .map(authState => !!authState)
                .do(authenticated => {
                  if (!authenticated) {
                      alert("Access denied.");
                      this.router.navigate(['public']);
                      return false;
                  } else {
                    return true;
                  }
                });
  }
}
