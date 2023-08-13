import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { TechnicalListComponent } from './components/technical/technical-list/technical-list.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './auth/auth.guard';
import { TechnicalCreateComponent } from './components/technical/technical-create/technical-create.component';
import { TechnicalUpdateComponent } from './components/technical/technical-update/technical-update.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  {
    path: '', component: NavComponent, canActivate: [authGuard], children: [
      { path: 'home', component: HomeComponent },

      { path: 'technical', component: TechnicalListComponent },
      { path: 'technical/create', component: TechnicalCreateComponent },
      { path: 'technical/update/:id', component: TechnicalUpdateComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
