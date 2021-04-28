import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-divivalue',
  templateUrl: './divivalue.component.html',
  styleUrls: ['./divivalue.component.css']
})
export class DivivalueComponent implements OnInit {

  constructor() { }
    DivValForm = new FormGroup({
    CurrDiv: new FormControl(''),
    DivOptn: new FormControl('1CASH'),
    DivDepo: new FormControl('0.00'),
    PaidUpAdds: new FormControl(''),
    CVOPUA: new FormControl('12300.00'),
    WholeLifeAdds: new FormControl(''),
    CVOWLA: new FormControl(''),
    AccuPUA: new FormControl(''),
    DivIntAmt2019: new FormControl(''),
    DivIntAmt: new FormControl(''),
    LoanPay: new FormControl(''),
    AddVal: new FormControl(''),
    OYT: new FormControl(''),
    OYTPrem: new FormControl('')

  });

  ngOnInit(): void {
  }

}
