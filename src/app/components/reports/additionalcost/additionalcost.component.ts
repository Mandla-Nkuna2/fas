import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additionalcost',
  templateUrl: './additionalcost.component.html',
  styleUrls: ['./additionalcost.component.scss'],
})
export class AdditionalcostComponent implements OnInit {
  dateScope: any
  locOrReg: any

  constructor() { }

  ngOnInit() {}

  onClick(){
    console.log(this.dateScope)
  }
}
