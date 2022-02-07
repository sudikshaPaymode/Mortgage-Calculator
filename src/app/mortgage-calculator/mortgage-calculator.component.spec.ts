import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MortgageCalculatorComponent} from './mortgage-calculator.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';

describe('MortgageCalculatorComponent', () => {
  let component: MortgageCalculatorComponent;
  let fixture: ComponentFixture<MortgageCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MortgageCalculatorComponent ],
      imports: [
        ReactiveFormsModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatSelectModule,
        MatOptionModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate the mortgage with all the parameters', () => {
    const payment = 13.33;
    component.mortgageForm.controls.mortgageAmount.setValue(100);
    component.mortgageForm.controls.interestRate.setValue(5);
    component.mortgageForm.controls.amortizationPeriodYears.setValue('1 year');
    component.mortgageForm.controls.paymentFrequency.setValue('Monthly');
    component.calculateMortgage();
    fixture.detectChanges();
    expect(component.mortgagePayment).toBeCloseTo(payment);
  });

  it('should show mortgage details container', () => {
    const showMortgageDetailsContainer = true;
    component.mortgageForm.controls.mortgageAmount.setValue(100);
    component.mortgageForm.controls.interestRate.setValue(5);
    component.mortgageForm.controls.amortizationPeriodYears.setValue('1 year');
    component.mortgageForm.controls.paymentFrequency.setValue('Monthly');
    component.calculateMortgage();
    fixture.detectChanges();
    expect(component.showMortgageDetails).toEqual(showMortgageDetailsContainer);
  });

});