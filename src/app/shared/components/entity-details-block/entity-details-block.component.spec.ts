import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityDetailsBlockComponent } from './entity-details-block.component';

describe('CellBlockComponent', () => {
  let component: EntityDetailsBlockComponent;
  let fixture: ComponentFixture<EntityDetailsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntityDetailsBlockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EntityDetailsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
