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

  findAll(): Observable<Technical[]> {
    return this.http.get<Technical[]>(`${API_CONFIG.baseUrl}/technical`);
  }
}
