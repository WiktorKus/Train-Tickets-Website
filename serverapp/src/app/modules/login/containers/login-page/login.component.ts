import {Component, Injector} from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthService} from "../../../../services/auth.service";
import {AppComponent} from "../../../../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formGroup: FormGroup;
  errorMessage!: string;

  constructor(
    private fb: FormBuilder,
    protected authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
    private injector: Injector
  ) {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard'], { replaceUrl: true });
    }

    this.formGroup = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.formGroup.invalid) {
      this.snackBar.open('Nazwa użytkownika i hasło jest wymagane.', 'Zamknij', { duration: 5000 });
      return;
    }
    const val = this.formGroup.value;

    if (val.email && val.password) {
      this.authService.login(val.email, val.password).subscribe(
        (response) => {
          console.log("User is logged in");
          sessionStorage.setItem('loggedUser', val.email);
          localStorage.setItem('access_token', response.token);
          this.router.navigate(['/dashboard'], { replaceUrl: true });
        },
        (error) => {
          console.log(error);
          this.snackBar.open('Nazwa użytkownika lub hasło jest błędne.', 'Zamknij', { duration: 5000 });
        }
      );
    }
  }

  onRegister(): void {
    const appComponent = this.injector.get(AppComponent);
    appComponent.toggleRegister();
    this.router.navigate(['/register']);
  }

}
