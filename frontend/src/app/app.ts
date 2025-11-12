import { Component, OnInit, signal } from '@angular/core';
import { Api, HelloResponse } from './services/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App implements OnInit {
  public readonly title = signal('frontend');

  // Holds the backend hello response (or null while loading)
  public readonly hello = signal<HelloResponse | null>(null);
  public readonly error = signal<string | null>(null);

  constructor(private api: Api) {}

  ngOnInit(): void {
    this.api.getHello().subscribe({
      next: (res) => this.hello.set(res),
      error: (err) => {
        console.error('Failed to fetch /api/hello', err);
        this.error.set('Failed to fetch hello from backend');
      },
    });
  }
}
