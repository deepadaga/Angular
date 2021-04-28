import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-loan-value',
  templateUrl: './loan-value.component.html',
  styleUrls: ['./loan-value.component.css']
})
export class LoanValueComponent implements OnInit {

  constructor() { }
  loanForm = new FormGroup({
    LoanIntPdtoDt: new FormControl('11/12/2021'),
    CurrCashVal: new FormControl('12300.00'),
    LoanAmt: new FormControl('12300.00'),
    CurrIncCV: new FormControl('12300.00'),
    LoanIntRt: new FormControl('5.0%'),
    PriorIncCV: new FormControl('12300.00'),
    AutoPremLoanCT: new FormControl('12300.00'),
    DPPO: new FormControl('Y'),

  });

  ngOnInit(): void {
  }

}
