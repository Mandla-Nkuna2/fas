import { AccidentManagement } from './../../models/AccidentManagement.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accidentmanagement',
  templateUrl: './accidentmanagement.page.html',
  styleUrls: ['./accidentmanagement.page.scss'],
})
export class AccidentmanagementPage implements OnInit {
  accidentManagement: AccidentManagement

  constructor() {
    this.accidentManagement = new AccidentManagement();
   }

  ngOnInit() {
  }

  onMarkAsComplete(){

  }

}
