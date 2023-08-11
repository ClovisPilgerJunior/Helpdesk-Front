import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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
    private service: AuthService) {}

  creds: Credentials = {
    email: '',
    password: ''
  }

  email = new FormControl(null, Validators.email);
  password = new FormControl(null, Validators.minLength(3));

  login() {
    this.service.authenticate(this.creds).subscribe(resquest => {
      this.service.successfulLogin(resquest.headers.get('Authorization'));
      this.toast.info(resquest.body.toString());
    }, () => {
      this.toast.error('Usuário e/ou senha inválidos');
    })
  }


  fieldsValidate(): boolean {
    return this.email.valid && this.password.valid;
  }
}
