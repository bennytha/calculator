import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageMethodComponent } from './percentage-method.component';

describe('PercentageMethodComponent', () => {
  let component: PercentageMethodComponent;
  let fixture: ComponentFixture<PercentageMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PercentageMethodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PercentageMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
