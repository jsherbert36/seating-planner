import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Shape of the response returned by the backend /api/hello endpoint.
 */
export interface HelloResponse {
  message: string;
  timestamp: string;
}

@Injectable({
  providedIn: 'root',
})
export class Api {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  /** Returns an observable of the hello payload from the backend. */
  getHello(): Observable<HelloResponse> {
    return this.http.get<HelloResponse>(`${this.apiUrl}/hello`);
  }
}
