import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellHoverComponent } from './cell-hover.component';

describe('CellHoverComponent', () => {
  let component: CellHoverComponent;
  let fixture: ComponentFixture<CellHoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CellHoverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
