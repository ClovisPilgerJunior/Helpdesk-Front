import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-read',
  templateUrl: './ticket-read.component.html',
  styleUrls: ['./ticket-read.component.css']
})
export class TicketReadComponent {

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

  constructor(
    private ticketService: TicketService,
    private toast: ToastrService,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    this.ticket.id = this.route.snapshot.paramMap.get('id');
    this.read();
  }

  read(): void {
    this.ticketService.findById(this.ticket.id).subscribe({
      next: response => {
        this.ticket = response;
      },
      error: ex => {
        console.log(ex)
        this.toast.error(ex.error.error);
      }
    });
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
