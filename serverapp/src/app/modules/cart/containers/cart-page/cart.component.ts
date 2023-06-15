import {Component, OnInit} from "@angular/core";
import {TicketService} from "../../../../services";
import {Router} from "@angular/router";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  tickets: any[] = [];
  pageSize = 1;
  pageIndex = 0;

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
  }

  constructor(private ticketService: TicketService, private router: Router) {}

  ngOnInit(): void {
    this.getTickets();
  }

  getTickets(): void {
    this.ticketService.getTickets().subscribe(
      (response) => {
        this.tickets = response;
      },
      (error) => {
        console.log('Error occurred while fetching tickets:', error);
      }
    );
  }

  modifyTicket(ticket: any): void {
    this.ticketService.modifyTicket(ticket).subscribe(
      (updatedTicket) => {
        console.log('Modified ticket:', updatedTicket);
        const index = this.tickets.findIndex(t => t.id === updatedTicket.id);
        if (index !== -1) {
          this.tickets[index] = updatedTicket;
        }
      },
      (error) => {
        console.log('Error occurred while modifying ticket:', error);
      }
    );
  }

  removeTicket(ticket: any): void {
    this.ticketService.removeTicket(ticket.id).subscribe(
      () => {
        console.log('Removed ticket:', ticket);
        this.tickets = this.tickets.filter(t => t.id !== ticket.id);
      },
      (error) => {
        console.log('Error occurred while removing ticket:', error);
      }
    );
  }

  getFormattedDateTime(timeArray: number[]): string {
    const [year, month, day, hour, minute] = timeArray;
    const date = new Date(year, month - 1, day, hour, minute);
    return date.toLocaleString();
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
