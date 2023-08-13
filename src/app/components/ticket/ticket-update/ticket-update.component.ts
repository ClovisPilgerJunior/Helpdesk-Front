import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { Technical } from 'src/app/models/technical';
import { Ticket } from 'src/app/models/ticket';
import { CustomerService } from 'src/app/services/customer.service';
import { TechnicalService } from 'src/app/services/technical.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-update',
  templateUrl: './ticket-update.component.html',
  styleUrls: ['./ticket-update.component.css']
})
export class TicketUpdateComponent {
  ticket: Ticket = {
    priority: '',
    status: '',
    title: '',
    observations: '',
    technical: '',
    customer: '',
    technicianName: '',
    customerName: '',
  }

  customer: Customer[] = []
  technical: Technical[] = []

  title: FormControl = new FormControl(null, [Validators.required])
  status: FormControl = new FormControl(null, [Validators.required])
  priority: FormControl = new FormControl(null, [Validators.required])
  technicianName: FormControl = new FormControl(null, [Validators.required])
  customerName: FormControl = new FormControl(null, [Validators.required])
  observations: FormControl = new FormControl(null, [Validators.required])

  constructor(
    private ticketService: TicketService,
    private customerService: CustomerService,
    private technicalService: TechnicalService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    this.ticket.id = this.route.snapshot.paramMap.get('id');
    this.findAllCustomer();
    this.findAllTechnical();
    this.findById();
  }

  findById(): void {
    this.ticketService.findById(this.ticket.id).subscribe(response =>{
      this.ticket = response;
    }, ex => {
      console.log(ex)
      this.toast.error(ex.error.error);
    })
  }

  update(): void {
    this.ticketService.update(this.ticket).subscribe(response => {
      this.toast.success('Chamado atualizado com sucesso', 'Chamado');
      this.router.navigate(['ticket'])
    }, ex => {
      console.log(ex)
      this.toast.error(ex.error.error);
    })
  }

  findAllCustomer(): void {
    this.customerService.findAll().subscribe(response => {
      this.customer = response
    })
  }

  findAllTechnical(): void {
    this.technicalService.findAll().subscribe(response => {
      this.technical = response;
    })
  }

  fieldValidate(): boolean {
    return this.title.valid &&
      this.status.valid &&
      this.priority.valid &&
      this.technicianName &&
      this.customerName.valid &&
      this.observations.valid
  }

  statusReturn(status: any): string {
    if (status == '0') {
      return 'ABERTO';
    } else if (status == '1') {
      return 'EM ANDAMENTO';
    } else {
      return 'ENCERRADO';
    }
  }

  statusPriority(priority: any): string {
    if (priority == '0') {
      return 'BAIXA';
    } else if (priority == '1') {
      return 'MEDIA';
    } else {
      return 'ALTA';
    }
  } 
}