import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceBookingPreviewComponent } from './device-booking-preview.component';

describe('CellHoverComponent', () => {
  let component: DeviceBookingPreviewComponent;
  let fixture: ComponentFixture<DeviceBookingPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeviceBookingPreviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeviceBookingPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
