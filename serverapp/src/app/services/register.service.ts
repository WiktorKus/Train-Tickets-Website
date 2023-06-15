import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BaseHttpService} from './base-http.service';
import {RegistrationModel} from "../models";

@Injectable({
  providedIn: 'root',
})
export class RegisterService extends BaseHttpService{

  registerUser(firstname: string, lastname: string, email: string, password: string): Observable<any> {
    const payload = { firstname, lastname, email, password };
    return this.post<RegistrationModel>('auth/register', payload);
  }
}
