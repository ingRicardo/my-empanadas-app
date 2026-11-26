import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateOrder } from './generate-order';

describe('GenerateOrder', () => {
  let component: GenerateOrder;
  let fixture: ComponentFixture<GenerateOrder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateOrder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateOrder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
