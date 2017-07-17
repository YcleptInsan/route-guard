import { Component } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';
import { Router } from '@angular/router';
import { AuthGuard } from './auth-guard.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent {
  user;
  private isLoggedIn: Boolean;
  private userName: String;


 constructor(public authService: AuthenticationService, private router: Router) {
   this.authService.user.subscribe(user =>  {
     if (user == null) {
        this.isLoggedIn = false;
        // this.router.navigate(['public']);
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
        this.router.navigate(['private']);
      }
   });
 }

 login() {
   this.authService.login();
 }

 logout() {
   this.authService.logout();
 }
}
