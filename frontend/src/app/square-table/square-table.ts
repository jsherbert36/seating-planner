import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-square-table',
  imports: [CommonModule],
  templateUrl: './square-table.html',
  styleUrl: './square-table.css',
})
export class SquareTable {
  // Grid dimensions (number of cells: 1-5)
  width = input<number>(5);  // number of columns
  length = input<number>(3); // number of rows
  
  // Cell size in pixels
  cellSize = input<number>(40);
  
  // Number of people to seat
  numPeople = input<number>(8);
  
  // Calculate box dimensions
  boxWidth = computed(() => this.width() * this.cellSize());
  boxLength = computed(() => this.length() * this.cellSize());
  
  // Create arrays for iterating in template
  columns = computed(() => Array(this.width()).fill(0));
  rows = computed(() => Array(this.length()).fill(0));
  
  // Get edge cells in clockwise order: top, right, bottom, left
  edgeCells = computed(() => {
    const cells: Array<{row: number, col: number}> = [];
    const w = this.width();
    const h = this.length();
    
    // Top row (left to right)
    for (let col = 0; col < w; col++) {
      cells.push({row: 0, col});
    }
    
    // Right column (top to bottom, skip top corner)
    for (let row = 1; row < h; row++) {
      cells.push({row, col: w - 1});
    }
    
    // Bottom row (right to left, skip right corner)
    if (h > 1) {
      for (let col = w - 2; col >= 0; col--) {
        cells.push({row: h - 1, col});
      }
    }
    
    // Left column (bottom to top, skip both corners)
    if (w > 1) {
      for (let row = h - 2; row > 0; row--) {
        cells.push({row, col: 0});
      }
    }
    
    return cells;
  });
  
  // Get the cells that should have circles (first numPeople edge cells)
  cellsWithCircles = computed(() => {
    const edge = this.edgeCells();
    const num = Math.min(this.numPeople(), edge.length);
    return edge.slice(0, num);
  });
  
  // Check if a cell should have a circle
  hasCircle(rowIndex: number, colIndex: number): boolean {
    return this.cellsWithCircles().some(
      cell => cell.row === rowIndex && cell.col === colIndex
    );
  }
}
