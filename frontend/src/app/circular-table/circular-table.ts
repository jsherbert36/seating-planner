import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-circular-table',
  imports: [CommonModule],
  templateUrl: './circular-table.html',
  styleUrl: './circular-table.css',
})
export class CircularTable {
  // Diameter in grid cells (1-5)
  diameter = input<number>(5);
  
  // Cell size in pixels
  cellSize = input<number>(40);
  
  // Number of people to seat
  numPeople = input<number>(8);
  
  // Calculate circle dimensions
  radius = computed(() => this.diameter() / 2);
  circleSize = computed(() => this.diameter() * this.cellSize());
  
  // Generate positions for people around the circle's edge
  peoplePositions = computed(() => {
    const positions: Array<{x: number, y: number}> = [];
    const num = this.numPeople();
    const r = this.radius() * this.cellSize();
    const centerX = r;
    const centerY = r;
    
    for (let i = 0; i < num; i++) {
      const angle = (i / num) * 2 * Math.PI - Math.PI / 2; // Start at top
      const x = centerX + r * Math.cos(angle);
      const y = centerY + r * Math.sin(angle);
      positions.push({x, y});
    }
    
    return positions;
  });
}
