import { Component } from '@angular/core';
import { PercentageMethodComponent } from './percentage-method/percentage-method.component';
import { ToggleActionComponent } from "./toggle-action/toggle-action.component";
import { DynamicValueChangeComponent } from "./dynamic-value-change/dynamic-value-change.component";

@Component({
  selector: 'app-root',
  imports: [PercentageMethodComponent, ToggleActionComponent, DynamicValueChangeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  activeIndex: number = 0

  calculatorType = [
    'Just Percentage',
    'Toggle Different Types',
    // 'Dynamic Method'
  ]


}
