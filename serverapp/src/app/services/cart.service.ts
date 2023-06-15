import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BaseHttpService} from "./base-http.service";

@Injectable({
  providedIn: 'root'
})
export class TicketService extends BaseHttpService{

  getTickets(): Observable<any[]> {
    return this.get<any[]>('tickets');
  }

  modifyTicket(ticket: any): Observable<any> {
    const url = `tickets/${ticket.id}`;
    return this.put(url, ticket);
  }

  removeTicket(ticketId: number): Observable<void> {
    const url = `tickets/${ticketId}`;
    return this.delete(url);
  }
}
