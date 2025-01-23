import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleActionComponent } from './toggle-action.component';

describe('ToggleActionComponent', () => {
  let component: ToggleActionComponent;
  let fixture: ComponentFixture<ToggleActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleActionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
