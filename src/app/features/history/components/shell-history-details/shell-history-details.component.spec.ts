import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellHistoryDetailsComponent } from './shell-history-details.component';

describe('ShellHistoryDetailsComponent', () => {
  let component: ShellHistoryDetailsComponent;
  let fixture: ComponentFixture<ShellHistoryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellHistoryDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShellHistoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
