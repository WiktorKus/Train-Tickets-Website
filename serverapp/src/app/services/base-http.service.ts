import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseHttpService {
  private readonly apiUrl = 'http://localhost:8088/api/v1';

  constructor(private httpClient: HttpClient) {}

  protected get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(`${this.apiUrl}/${url}`);
  }

  protected getAll<T>(url: string): Observable<T[]> {
    return this.httpClient.get<T[]>(`${this.apiUrl}/${url}`);
  }

  protected post<T>(url: string, data: any, headers?: HttpHeaders): Observable<T> {
    const requestOptions = { headers };
    return this.httpClient.post<T>(`${this.apiUrl}/${url}`, data, requestOptions);
  }

  protected put<T>(url: string, data: any, headers?: HttpHeaders): Observable<T> {
    const requestOptions = { headers };
    return this.httpClient.put<T>(`${this.apiUrl}/${url}`, data, requestOptions);
  }

  protected delete<T>(url: string, headers?: HttpHeaders): Observable<T> {
    const requestOptions = { headers };
    return this.httpClient.delete<T>(`${this.apiUrl}/${url}`, requestOptions);
  }
}
