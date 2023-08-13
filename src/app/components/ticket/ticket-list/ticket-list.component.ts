import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  ELEMENT_DATA: Ticket[] = []
  FILTERED_DATA: Ticket[] = []

  displayedColumns: string[] = ['id', 'title', 'customerName', 'technicianName', 'openingDate', 'closingDate', 'priority', 'status', 'action'];
  dataSource = new MatTableDataSource<Ticket>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private service: TicketService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe(response => {
      this.ELEMENT_DATA = response
      this.dataSource = new MatTableDataSource<Ticket>(response);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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

  orderByStatus(status: any): void {
    let list: Ticket[] = []
    this.ELEMENT_DATA.forEach(element => {
      if (element.status == status)
        list.push(element)
    });
    if (status !== '') {
      this.FILTERED_DATA = list;
      this.dataSource = new MatTableDataSource<Ticket>(list);
      this.dataSource.paginator = this.paginator;
    } else {
      this.dataSource = new MatTableDataSource<Ticket>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    }

  }

}
