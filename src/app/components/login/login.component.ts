import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credentials } from 'src/app/models/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private toast: ToastrService) {}

  creds: Credentials = {
    email: '',
    password: ''
  }

  email = new FormControl(null, Validators.email);
  password = new FormControl(null, Validators.minLength(3));

  login() {
    this.toast.error('Usuário e/ou senha inválidos', 'Login');
    this.creds.password = '';
  }


  fieldsValidate(): boolean {
    if(this.email.valid && this.password.valid){
      return true;
    } else {
      return false;
    }
  }
}
