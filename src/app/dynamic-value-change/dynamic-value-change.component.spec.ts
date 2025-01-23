import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicValueChangeComponent } from './dynamic-value-change.component';

describe('DynamicValueChangeComponent', () => {
  let component: DynamicValueChangeComponent;
  let fixture: ComponentFixture<DynamicValueChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicValueChangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicValueChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
