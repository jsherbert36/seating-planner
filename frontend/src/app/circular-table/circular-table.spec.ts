import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularTable } from './circular-table';

describe('CircularTable', () => {
  let component: CircularTable;
  let fixture: ComponentFixture<CircularTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircularTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircularTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
