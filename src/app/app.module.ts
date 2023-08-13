import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Para trabalhar com formulários no Angular
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Para realizar requisições HTTP
import { HttpClientModule } from '@angular/common/http';

// Imports para componentes do Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

// componentes module
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { TechnicalListComponent } from './components/technical/technical-list/technical-list.component';
import { LoginComponent } from './components/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { TechnicalCreateComponent } from './components/technical/technical-create/technical-create.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { TechnicalUpdateComponent } from './components/technical/technical-update/technical-update.component';
import { TechnicalDeleteComponent } from './components/technical/technical-delete/technical-delete.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';
import { CustomerUpdateComponent } from './components/customer/customer-update/customer-update.component';
import { CustomerDeleteComponent } from './components/customer/customer-delete/customer-delete.component';
import { TicketListComponent } from './components/ticket/ticket-list/ticket-list.component';
import { TicketCreateComponent } from './components/ticket/ticket-create/ticket-create.component';
import { TicketUpdateComponent } from './components/ticket/ticket-update/ticket-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    TechnicalListComponent,
    LoginComponent,
    TechnicalCreateComponent,
    TechnicalUpdateComponent,
    TechnicalDeleteComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,
    CustomerDeleteComponent,
    TicketListComponent,
    TicketCreateComponent,
    TicketUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
      // Forms
      FormsModule,
      ReactiveFormsModule,
      // Requisições http
      HttpClientModule,
      // Angular Material
      MatFormFieldModule,
      MatPaginatorModule,
      MatCheckboxModule,
      MatSnackBarModule,
      MatToolbarModule,
      MatSidenavModule,
      MatButtonModule,
      MatSelectModule,
      MatInputModule,
      MatRadioModule,
      MatTableModule,
      MatIconModule,
      MatListModule,
      MatCardModule,
      ToastrModule.forRoot({
        timeOut: 4000,
        closeButton: true,
        progressBar: true
      }),
      NgxMaskDirective,
      NgxMaskPipe
    ],
  providers: [AuthInterceptorProvider, provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
