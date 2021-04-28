import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-opp',
  templateUrl: './opp.component.html',
  styleUrls: ['./opp.component.css']
})

export class OppComponent implements OnInit {

  constructor() { }
  profileForm = new FormGroup({
    PremCY: new FormControl(''),
    PremPY: new FormControl(''),
    PaidCY: new FormControl(''),
    PaidPY: new FormControl(''),
    TotPaidPY: new FormControl(''),
    PlanCd: new FormControl('AF'),
    OppInd: new FormControl('Y'),
    Type: new FormControl('3'),
    Agent: new FormControl(''),
    EffDt: new FormControl('1/1/21'),
    AdYr: new FormControl('2019'),
    RatingClass: new FormControl('STD'),
    ModalAmt: new FormControl(''),
    AccuPrem: new FormControl('$4,000'),
    AccuPdUp: new FormControl(''),
    NGCheckInd: new FormControl(''),
    NGCheckDt: new FormControl(''),
    CurrExpChg: new FormControl('0'),
  });

  ngOnInit(): void {
  }

}
