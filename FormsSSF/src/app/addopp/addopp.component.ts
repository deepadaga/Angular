import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-addopp',
  templateUrl: './addopp.component.html',
  styleUrls: ['./addopp.component.css']
})
export class AddoppComponent implements OnInit {

  constructor() { }
  AddOppForm = new FormGroup({
    ASBPA: new FormControl('$23,000'),
    CYAORPA: new FormControl(''),
    PYAORPA: new FormControl(''),
    NYAORPA: new FormControl('$1,000'),
    TORPPA: new FormControl(''),
    OREC: new FormControl('')
  });

  ngOnInit(): void {
  }

}
