import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BaseHttpService} from "./base-http.service";

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends BaseHttpService{

  searchTrains(searchCriteria: any): Observable<any> {

    return this.post('trains/search', searchCriteria);
  }

  addTicket(ticket: any): Observable<any> {
    return this.post<any>('tickets', ticket);
  }
}
