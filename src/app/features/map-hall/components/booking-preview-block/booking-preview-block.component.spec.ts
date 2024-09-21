import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPreviewBlockComponent } from './booking-preview-block.component';

describe('CellBlockComponent', () => {
  let component: BookingPreviewBlockComponent;
  let fixture: ComponentFixture<BookingPreviewBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingPreviewBlockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookingPreviewBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
