import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent {

  customer: Customer = {
    id: '',
    name: '',
    cpf: '',
    email: '',
    password: '',
    profiles: [],
    createAt: ''
  }

  name: FormControl = new FormControl(null, Validators.minLength(3));
  cpf: FormControl = new FormControl(null, Validators.required);
  email: FormControl = new FormControl(null, Validators.email);
  password: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(
    private service: CustomerService,
    private toast: ToastrService,
    private router: Router
  ) { }

  create(): void {
    this.service.create(this.customer).subscribe({
      next: () => {
        this.toast.success('Cliente cadastrado com sucesso', 'Cadastro');
        this.router.navigate(['customer']);
      },
      error: ex => {
        console.log()
        if (ex.error.status === 500) {
          this.toast.error('Número do Cadastro de Pessoa Física (CPF) brasileiro inválido')
        } else {
          this.toast.error(ex.error.message);
        }
      }
    });
  }

  addProfile(profile: any): void {

    if (this.customer.profiles.includes(profile)) {
      this.customer.profiles.splice(this.customer.profiles.indexOf(profile), 1)
    } else {
      this.customer.profiles.push(profile);
    }

  }

  fieldValidate(): boolean {
    return this.name.valid && this.cpf.valid && this.email.valid && this.password.valid;
  }
}
