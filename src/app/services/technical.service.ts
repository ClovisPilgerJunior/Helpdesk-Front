import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Technical } from '../models/technical';
import { Observable } from 'rxjs/internal/Observable';
import { API_CONFIG } from '../config/api.configs';

@Injectable({
  providedIn: 'root'
})
export class TechnicalService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Technical> {
    return this.http.get<Technical>(`${API_CONFIG.baseUrl}/technical/${id}`);
  }

  findAll(): Observable<Technical[]> {
    return this.http.get<Technical[]>(`${API_CONFIG.baseUrl}/technical`);
  }

  create(technical: Technical): Observable<Technical>{
    return this.http.post<Technical>(`${API_CONFIG.baseUrl}/technical`, technical)
  }

  update(technical: Technical): Observable<Technical>{
    return this.http.put<Technical>(`${API_CONFIG.baseUrl}/technical/${technical.id}`, technical)
  }

  delete(technical: Technical): Observable<Technical>{
    return this.http.delete<Technical>(`${API_CONFIG.baseUrl}/technical/${technical.id}`);
  }

}
