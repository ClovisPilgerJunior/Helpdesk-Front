import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { API_CONFIG } from '../config/api.configs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Customer> {
    return this.http.get<Customer>(`${API_CONFIG.baseUrl}/customer/${id}`);
  }

  findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${API_CONFIG.baseUrl}/customer`);
  }

  create(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>(`${API_CONFIG.baseUrl}/customer`, customer)
  }

  update(customer: Customer): Observable<Customer>{
    return this.http.put<Customer>(`${API_CONFIG.baseUrl}/customer/${customer.id}`, customer)
  }

  delete(id: any): Observable<Customer>{
    return this.http.delete<Customer>(`${API_CONFIG.baseUrl}/customer/${id}`);
  }

}
