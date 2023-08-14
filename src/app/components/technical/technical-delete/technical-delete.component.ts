import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Technical } from 'src/app/models/technical';
import { TechnicalService } from 'src/app/services/technical.service';


@Component({
  selector: 'app-technical-delete',
  templateUrl: './technical-delete.component.html',
  styleUrls: ['./technical-delete.component.css']
})
export class TechnicalDeleteComponent implements OnInit {
  technical: Technical = {
    id: '',
    name: '',
    cpf: '',
    email: '',
    password: '',
    profiles: [],
    createAt: ''
  }

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

  delete(): void {
    this.service.delete(this.technical.id).subscribe({
      next: () => {
      },
      error: ex => {
        if (ex.status === 200) {
          this.toast.success('Técnico excluido com sucesso', 'Delete');
          this.router.navigate(['technical']);
        } else {
          this.toast.error(ex.error.message);
        }
      }
    })
  }
}
