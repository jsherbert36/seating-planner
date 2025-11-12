import { Component, OnInit, signal } from '@angular/core';
import { HelloResponse, sayHello } from './services/api';

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

  ngOnInit(): void {
    sayHello()
      .then((res) => {
        if (res.status === 200) {
          this.hello.set(res.data as HelloResponse);
        } else {
          this.error.set('Unexpected response from backend');
        }
      })
      .catch((err) => {
        console.error('Failed to fetch /api/hello', err);
        this.error.set('Failed to fetch hello from backend');
      });
  }
}
