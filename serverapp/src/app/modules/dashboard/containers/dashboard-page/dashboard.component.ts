import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../../../../services/auth.service";

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

  constructor(private http: HttpClient, private authService: AuthService) { }

  searchTrains(): void {
    const searchCriteria = {
      source: this.source,
      destination: this.destination,
      departureDate: this.departureDate?.toISOString().split('T')[0]
    };

    this.http.post('http://localhost:8088/api/v1/trains/search', searchCriteria)
      .subscribe((trains: any) => {
        this.trains = trains;
        this.showPopup = true;
      });
  }

  closePopup(): void {
    this.showPopup = false;
  }

  logout() {
    this.authService.logout();
  }
}
