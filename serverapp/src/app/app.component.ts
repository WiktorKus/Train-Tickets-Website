import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Railway';

  showRegister: boolean = false;

  constructor(public authService: AuthService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.url;
        if (currentUrl === '/register') {
          this.showRegister = true;
        } else {
          this.showRegister = false;
        }
      }
    });
  }

  toggleRegister(): void {
    this.showRegister = !this.showRegister;
    if (this.showRegister) {
      this.router.navigateByUrl('/register');
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  resetRegisterFlag(): void {
    this.showRegister = false;
  }

}
