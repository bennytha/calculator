import { DecimalPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-value-change',
  imports: [FormsModule, ReactiveFormsModule, DecimalPipe],
  templateUrl: './dynamic-value-change.component.html',
  styleUrl: './dynamic-value-change.component.scss'
})
export class DynamicValueChangeComponent {
  myForm!: FormGroup;
  formulaFor = [
    'Percentage',
    'Difference',
    'Target'
  ]
  amountValue = signal<number>(0);
  percentageValue = signal<number>(0);
  noOfShares = signal<number>(0);
  selectedFormula = signal<string>(this.formulaFor[0]);

  calculatedPercentageDifference = computed(() => {
    return this.amountValue() * this.percentageValue() / 100;
  });

  precentageAmountRemovedFromAmount = computed(() => {
    return this.amountValue() - this.calculatedPercentageDifference();
  });

  precentageAmountAddedToAmount = computed(() => {
    return this.amountValue() + this.calculatedPercentageDifference();
  });

  profitDifference = computed(() => {
    return this.noOfShares() * this.calculatedPercentageDifference();
  });

  lossDifference = computed(() => {
    return this.noOfShares() * -this.calculatedPercentageDifference();
  });

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      amount: [undefined],
      percentage: [undefined],
      shares: [undefined]
    });
  }

  ngOnInit() {
    // Subscribe to value changes
    this.myForm.get('amount')?.valueChanges.subscribe((value) => {
      this.amountValue.set(value);
    });
    this.myForm.get('percentage')?.valueChanges.subscribe((value) => {
      this.percentageValue.set(value);
    });
    this.myForm.get('shares')?.valueChanges.subscribe((value) => {
      this.noOfShares.set(value);
    });
  }
}
