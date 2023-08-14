import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Technical } from 'src/app/models/technical';
import { TechnicalService } from 'src/app/services/technical.service';


@Component({
  selector: 'app-technical-update',
  templateUrl: './technical-update.component.html',
  styleUrls: ['./technical-update.component.css']
})
export class TechnicalUpdateComponent implements OnInit {
  technical: Technical = {
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
    private service: TechnicalService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.technical.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.technical.id).subscribe(response => {
      response.profiles = [];
      this.technical = response;
    })
  }

  update(): void {
    this.service.update(this.technical).subscribe({
      next: () => {
        this.toast.success('Técnico atualizado com sucesso', 'Update');
        this.router.navigate(['technical']);
      },
      error: ex => {
        console.log(ex)
        if (ex.error.status === 500) {
          this.toast.error('Número do Cadastro de Pessoa Física (CPF) brasileiro inválido')
        } else {
          this.toast.error(ex.error.message);
        }
      }
    });
  }

  addProfile(profile: any): void {

    if (this.technical.profiles.includes(profile)) {
      this.technical.profiles.splice(this.technical.profiles.indexOf(profile), 1)
    } else {
      this.technical.profiles.push(profile);
    }

  }

  fieldValidate(): boolean {
    return this.name.valid && this.cpf.valid && this.email.valid && this.password.valid;
  }
}

