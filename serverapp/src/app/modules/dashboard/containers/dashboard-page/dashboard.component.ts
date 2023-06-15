import {Component, ViewChild} from "@angular/core";
import {AuthService} from "../../../../services/auth.service";
import {DashboardService} from "../../../../services";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  source?: string;
  destination?: string;
  departureDate?: Date;
  trains: any[] = [];
  showPopup: boolean = false;
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  currentPage: number = 1;
  itemsPerPage: number = 5;
  displayedTrains: any[] = [];
  showAddTicketFormModal: boolean = false;
  selectedTrain: any;
  passengerName: string = "";
  seatNumber: number = 0;

  constructor(
    private trainService: DashboardService,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {
  }

  ngAfterViewInit(): void {
    this.paginator?.page.subscribe((page) => {
      this.currentPage = page.pageIndex + 1;
      this.updateDisplayedTrains();
    });
  }

  searchTrains(): void {
    const searchCriteria = {
      source: this.source,
      destination: this.destination,
      departureDate: this.departureDate ? new Date(this.departureDate) : undefined    };

    this.trainService.searchTrains(searchCriteria)
      .subscribe((trains: any) => {
        this.trains = trains;
        this.showPopup = true;
      });
  }

  logout() {
    this.authService.logout();
  }

  showAddTicketForm(train: any): void {
    this.selectedTrain = train;
    this.showAddTicketFormModal = true;
  }

  addTicket(): void {
    const departureTimeArray = this.selectedTrain.departureTime;
    const arrivalTimeArray = this.selectedTrain.arrivalTime;

    const ticketData = {
      train: this.selectedTrain,
      passengerName: this.passengerName,
      seatNumber: this.seatNumber,
      departureStation: this.selectedTrain.departureStation,
      arrivalStation: this.selectedTrain.arrivalStation,
      departureTime: new Date(departureTimeArray[0], departureTimeArray[1], departureTimeArray[2], departureTimeArray[3], departureTimeArray[4]),
      arrivalTime: new Date(arrivalTimeArray[0], arrivalTimeArray[1], arrivalTimeArray[2], arrivalTimeArray[3], arrivalTimeArray[4]),
    };

    this.trainService.addTicket(ticketData)
      .subscribe(
        (response: any) => {
          console.log("Ticket added successfully:", response);
          this.cancelAddTicket();
          this.snackBar.open("Ticket added successfully!", "Dismiss", {
            duration: 3000,
            panelClass: ["success-snackbar"],
          });
        },
        (error: any) => {
          console.error("Error adding ticket:", error);
          this.snackBar.open("Error adding ticket. Please try again.", "Dismiss", {
            duration: 3000,
            panelClass: ["error-snackbar"],
          });
        }
      );
  }

  getFormattedDateTime(timeArray: number[]): string {
    const [year, month, day, hour, minute] = timeArray;
    const date = new Date(year, month - 1, day, hour, minute);
    return date.toLocaleString();
  }

  cancelAddTicket(): void {
    this.showAddTicketFormModal = false;
    this.passengerName = "";
    this.seatNumber = 0;
  }

  updateDisplayedTrains(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.displayedTrains = this.trains.slice(
      startIndex,
      startIndex + this.itemsPerPage
    );
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.updateDisplayedTrains();
  }

  closePopup(): void {
    this.showPopup = false;
  }

  help(): void {
    this.router.navigate(['/help'], { replaceUrl: true });
  }

  cart(): void {
    this.router.navigate(['/cart'], { replaceUrl: true });
  }
}

