import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceCellComponent } from './device-cell.component';

describe('CellComponent', () => {
  let component: DeviceCellComponent;
  let fixture: ComponentFixture<DeviceCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeviceCellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeviceCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
