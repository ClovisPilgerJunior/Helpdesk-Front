import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { TechnicalListComponent } from './components/technical/technical-list/technical-list.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './auth/auth.guard';
import { TechnicalCreateComponent } from './components/technical/technical-create/technical-create.component';
import { TechnicalUpdateComponent } from './components/technical/technical-update/technical-update.component';
import { TechnicalDeleteComponent } from './components/technical/technical-delete/technical-delete.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';
import { CustomerDeleteComponent } from './components/customer/customer-delete/customer-delete.component';
import { CustomerUpdateComponent } from './components/customer/customer-update/customer-update.component';
import { TicketListComponent } from './components/ticket/ticket-list/ticket-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  {
    path: '', component: NavComponent, canActivate: [authGuard], children: [
      { path: 'home', component: HomeComponent },

      { path: 'technical', component: TechnicalListComponent },
      { path: 'technical/create', component: TechnicalCreateComponent },
      { path: 'technical/update/:id', component: TechnicalUpdateComponent },
      { path: 'technical/delete/:id', component: TechnicalDeleteComponent },

      { path: 'customer', component: CustomerListComponent },
      { path: 'customer/create', component: CustomerCreateComponent },
      { path: 'customer/update/:id', component: CustomerUpdateComponent },
      { path: 'customer/delete/:id', component: CustomerDeleteComponent },

      { path: 'tickets', component: TicketListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
