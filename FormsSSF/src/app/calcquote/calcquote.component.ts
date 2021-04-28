import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-calcquote',
  templateUrl: './calcquote.component.html',
  styleUrls: ['./calcquote.component.css']
})
export class CalcquoteComponent implements OnInit {

  constructor() { }
  CalcQuoteForm = new FormGroup({
    ReqDivAmt: new FormControl(''),
    CFW: new FormControl('YES'),
    CSW: new FormControl('YES'),
    IFW: new FormControl(''),
    ISW: new FormControl(''),
    ModEndInd: new FormControl('N'),
    FGAmt: new FormControl(''),
    FGW: new FormControl(''),
    SGW: new FormControl(''),
    NetDivChk: new FormControl(''),
    TotDivWith: new FormControl('$1,000'),

  });


  ngOnInit(): void {
  }

}
