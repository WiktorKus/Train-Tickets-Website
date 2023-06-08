import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RegisterService} from "../../../../services";
import {Router} from "@angular/router";
import {AppComponent} from "../../../../app.component";
import {AuthService} from "../../../../services/auth.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  passwordMismatch: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private registrationService: RegisterService,
    private router: Router,
    private appComponent: AppComponent,
    protected authService: AuthService,
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard'], { replaceUrl: true });
    }

    this.registerForm.get('confirmPassword')?.valueChanges.subscribe(() => {
      this.passwordMismatch = this.registerForm.hasError('passwordMismatch');
    });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  registerUser(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const firstname = this.registerForm.value.firstname;
    const lastname = this.registerForm.value.lastname;
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;

    this.registrationService.registerUser(firstname, lastname, email, password).subscribe(
      (response) => {
        this.appComponent.resetRegisterFlag();
        this.router.navigate(['/login']);
      },
      (error) => {
        this.router.navigate(['/register']);
      }
    );

    this.registerForm.reset();
  }
}
