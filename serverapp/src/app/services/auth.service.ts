import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseHttpService } from "./base-http.service";
import { Router } from "@angular/router";
import { tap } from "rxjs";
import { Location } from '@angular/common';

@Injectable()
export class AuthService extends BaseHttpService {

  constructor(private router: Router, private http: HttpClient, private location: Location) {
    super(http);
  }

  login(email: string, password: string) {
    return this.post<any>('auth/authenticate', {email, password}).pipe(
      tap(() => this.location.replaceState('/'))
    );
  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login'], { replaceUrl: true });
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    return token !== null;
  }
}
