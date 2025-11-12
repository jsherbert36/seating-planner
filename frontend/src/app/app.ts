import { Component, OnInit, signal } from '@angular/core';
import { Api, HelloResponse } from './services/api';
import { Table } from './table/table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Table],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App implements OnInit {
  public readonly title = signal('frontend');

  // Holds the backend hello response (or null while loading)
  public readonly hello = signal<HelloResponse | null>(null);
  
  // Number of people
  public readonly numPeople = signal<number>(8);

  constructor(private api: Api) {}

  ngOnInit(): void {
    this.api.getHello().subscribe({
      next: (res) => this.hello.set(res),
      error: (err) => {
        console.error('Failed to fetch /api/hello', err);
      },
    });
  }
  
  updatePeople(value: string): void {
    const num = parseInt(value, 10);
    if (!isNaN(num) && num > 0) {
      this.numPeople.set(num);
    }
  }
}
