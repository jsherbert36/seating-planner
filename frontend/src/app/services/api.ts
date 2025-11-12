import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
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

  private readonly http = inject(HttpClient);

  /** Returns an observable of the hello payload from the backend. */
  getHello(): Observable<HelloResponse> {
    return this.http.get<HelloResponse>(`${this.apiUrl}/hello`);
  }
}
