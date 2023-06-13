import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import {DashboardComponent} from "./containers/dashboard-page/dashboard.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatCheckboxModule} from "@angular/material/checkbox";

const COMPONENTS = [DashboardComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, FormsModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule],
  exports: [COMPONENTS]
})
export class DashboardModule {}
