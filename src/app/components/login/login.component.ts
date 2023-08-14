import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Credentials } from 'src/app/models/credentials';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private toast: ToastrService,
    private service: AuthService,
    private router: Router) { }

  creds: Credentials = {
    email: '',
    password: ''
  }

  email = new FormControl(null, Validators.email);
  password = new FormControl(null, Validators.minLength(3));

  login() {
    this.service.authenticate(this.creds).subscribe({
      next: response => {
        const responseBody = response.body.toString();
        const cleanedBody = responseBody.replace(/[{}":]|token/g, '');
        
        this.service.successfulLogin(cleanedBody);
        this.toast.success('Login realizado com sucesso', 'Login', { timeOut: 3000, positionClass: 'toast-bottom-right' });
        this.router.navigate(['']);
      },
      error: () => {
        // Em casso de erro de autenticação lança esse callback
        this.toast.error('Usuário e/ou senha inválidos');
      }
    });
  }
  



  fieldsValidate(): boolean {
    return this.email.valid && this.password.valid;
  }
}
