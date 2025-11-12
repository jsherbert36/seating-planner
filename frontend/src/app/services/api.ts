import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getHello() {
    return this.http.get(`${this.apiUrl}/hello`);
  }
}
