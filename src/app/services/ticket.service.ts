import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.configs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${API_CONFIG.baseUrl}/ticket`)
  }

  findById(id: any): Observable<Ticket> {
    return this.http.get<Ticket>(`${API_CONFIG.baseUrl}/ticket/${id}`);
  }

  create(ticket: Ticket): Observable<Ticket>{
    return this.http.post<Ticket>(`${API_CONFIG.baseUrl}/ticket`, ticket)
  }

  update(ticket: Ticket): Observable<Ticket>{
    return this.http.put<Ticket>(`${API_CONFIG.baseUrl}/ticket/${ticket.id}`, ticket)
  }
}
