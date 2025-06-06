import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityDetailsComponent } from './entity-details.component';

describe('CellHoverComponent', () => {
  let component: EntityDetailsComponent;
  let fixture: ComponentFixture<EntityDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntityDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EntityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
