import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/containers/login-page/login.component';
import {RegisterComponent} from "./modules/register/containers";
import {AuthGuard} from "./services";
import {DashboardComponent} from "./modules/dashboard/containers";
import {HelpComponent} from "./modules/help/containers/help-page/help.component";
import {CartComponent} from "./modules/cart/containers";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'help',
    component: HelpComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
