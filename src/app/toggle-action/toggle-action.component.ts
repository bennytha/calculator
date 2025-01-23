import { DecimalPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-toggle-action',
  imports: [FormsModule, ReactiveFormsModule, DecimalPipe],
  templateUrl: './toggle-action.component.html',
  styleUrl: './toggle-action.component.scss'
})
export class ToggleActionComponent {
  myForm!: FormGroup;
  formulaFor = [
    'Percentage',
    'Difference',
    'Target'
  ]

  amountValue = signal<number>(0);
  value = signal<number>(0);
  percentage = signal<number>(0);
  noOfShares = signal<number>(0);
  selectedFormula = signal<string>(this.formulaFor[0]);

  displayValue = {
    percentage: 0,
    difference: 0,
    negativeMove: 0,
    positiveMove: 0,
    profitOrLoss: 0,
  }

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      amount: [undefined, Validators.required],
      value: [undefined, Validators.required],
      shares: [undefined, Validators.required]
    });
  }

  ngOnInit() {
  }

  // log selected value when select element changed
  onMethodChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedFormula.set(selectedValue);
    this.myForm.get('value')?.setValue(0);
  }

  calculate() {
    if (
      this.myForm.get('value')?.value === 0 ||
      this.myForm.get('value')?.value === null ||
      this.myForm.get('amount')?.value === 0 ||
      this.myForm.get('amount')?.value === null
    ) {
      return
    } else {
      if (this.selectedFormula() === 'Percentage') {
        this.displayValue.percentage = (this.myForm.get('value')?.value);
        this.valueFormPercentage()
      }
      if (this.selectedFormula() === 'Difference') {
        this.displayValue.percentage = (this.myForm.get('value')?.value / this.myForm.get('amount')?.value) * 100;
        this.valueFormPercentage()
      }
      if (this.selectedFormula() === 'Target') {
        let diff = this.myForm.get('amount')?.value - this.myForm.get('value')?.value;
        let unsignedDiff = Math.abs(diff);
        this.displayValue.percentage = (unsignedDiff / this.myForm.get('amount')?.value) * 100;
        this.displayValue.difference = unsignedDiff;
        this.valueFormPercentage()
      }
    }
  }

  valueFormPercentage() {
    if (this.selectedFormula() === 'Difference') {
      this.displayValue.difference = this.myForm.get('value')?.value
    }
    if (this.selectedFormula() === 'Percentage') {
      this.displayValue.difference = (this.myForm.get('amount')?.value * this.myForm.get('value')?.value) / 100;
    }
    this.displayValue.negativeMove = this.myForm.get('amount')?.value - this.displayValue.difference;
    this.displayValue.positiveMove = this.myForm.get('amount')?.value + this.displayValue.difference;
    if (this.myForm.get('shares')?.value === 0 || this.myForm.get('shares')?.value === null) {
      this.displayValue.profitOrLoss = 0;
    } else {
      this.displayValue.profitOrLoss = this.myForm.get('shares')?.value * this.displayValue.difference;
    }
  }
  toggleOption(option: string) {
    this.selectedFormula.set(option)
    this.myForm.reset()
    this.displayValue = {
      percentage: 0,
      difference: 0,
      negativeMove: 0,
      positiveMove: 0,
      profitOrLoss: 0,
    }
  }
}
