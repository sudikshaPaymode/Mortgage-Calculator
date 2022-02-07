import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.scss'],
})
export class MortgageCalculatorComponent implements OnInit {

  public amortizationYears: string[] = ['0 years', '1 year', '2 years', '3 years', '4 years', '5 years', '6 years', '7 years', '8 years', '9 years', '10 years', '11 years', '12 years', '13 years', '14 years', '15 years', '16 years', '17 years', '18 years', '19 years', '20 years', '21 years', '22 years', '23 years', '24 years', '25 years', '26 years', '27 years', '28 years', '29 years', '30 years'];
  public amortizationMonths: string[] = ['0 months', '1 month', '2 months', '3 months', '4 months', '5 months', '6 months', '7 months', '8 months', '9 months', '10 months', '11 months'];
  public paymentFrequencyOptions: string[] = ['Monthly', 'Semi-monthly', 'Bi-weekly', 'Weekly'];
  public showMortgageDetails: boolean = false;
  public mortgagePayment: number = 0;
  public mortgageForm = new FormGroup({
    mortgageAmount : new FormControl(''),
    interestRate: new FormControl(''),
    amortizationPeriodYears: new FormControl(''),
    amortizationPeriodMonths: new FormControl(''),
    paymentFrequency: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  public calculateMortgage(): void{
    console.log(this.mortgageForm.value);
    this.showMortgageDetails = true;
    const principal = this.mortgageForm.controls.mortgageAmount.value;
    const interestRate = this.mortgageForm.controls.interestRate.value;
    const amotizationYears = parseInt(this.mortgageForm.controls.amortizationPeriodYears.value.split(' ')[0], 10);
    const numberOfMortgagePayments = this.mortgageForm.controls.paymentFrequency.value === 'Monthly'
      ? amotizationYears * 12 : amotizationYears * 24;
    // @ts-ignore
    // tslint:disable-next-line:no-bitwise
    this.mortgagePayment = ((principal / numberOfMortgagePayments) + interestRate).toFixed(2);
  }

  // Choose year using select dropdown
  public changeAmortizationYears(e: any): void {
    this.mortgageForm.controls.amortizationPeriodYears.setValue(e.target.value);
  }

// Choose month using select dropdown
  public changeAmortizationMonths(e: any): void {
    this.mortgageForm.controls.amortizationPeriodMonths.setValue(e.target.value);
  }

// Choose month using select dropdown
  public changePaymentFrequency(e: any): void {
    this.mortgageForm.controls.paymentFrequency.setValue(e.target.value);
  }
}
