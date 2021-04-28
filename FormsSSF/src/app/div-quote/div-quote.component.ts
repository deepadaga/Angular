import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-div-quote',
  templateUrl: './div-quote.component.html',
  styleUrls: ['./div-quote.component.css']
})
export class DivQuoteComponent implements OnInit {
  @Input() hero

  constructor() { }
  DivQuoteForm = new FormGroup({
    PremPdtoDt: new FormControl('11/12/2021'),
    NextActDt: new FormControl('12300.00'),
    MaxDiv: new FormControl('0.00'),
    DivOverpay: new FormControl(''),
    DivOverpayDt: new FormControl(''),
    CVOPUA: new FormControl('12300.00'),
    ModEndInd: new FormControl(''),
    AnnivYr: new FormControl('2019'),
    LoanIntPdtoDt: new FormControl('11/12/2021'),
    LoanAmt: new FormControl(''),
    LoanIntRt: new FormControl('5.0%'),
    VarianceCd: new FormControl('KF')

  });

  ngOnInit(): void {
  }

}
