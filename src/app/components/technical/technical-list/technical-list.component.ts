import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Technical } from 'src/app/models/technical';

@Component({
  selector: 'app-technical-list',
  templateUrl: './technical-list.component.html',
  styleUrls: ['./technical-list.component.css']
})
export class TechnicalListComponent {
  ELEMENT_DATA: Technical[] = [
    {
      id: 1,
      name: 'Junior Teste',
      cpf: '123.456.789-93',
      email: 'a@a.com',
      password: '1234',
      profiles: ['0'],
      createAt: '15/08/2023'
    }
  ]

  displayedColumns: string[] = ['id', 'name', 'cpf', 'email', 'action'];
  dataSource = new MatTableDataSource<Technical>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}