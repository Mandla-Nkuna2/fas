import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import StaffTimesheet from 'src/app/models/StaffTimesheet.model';

@Component({
  selector: 'app-stafftimesheets',
  templateUrl: './stafftimesheets.page.html',
  styleUrls: ['./stafftimesheets.page.scss'],
})
export class StafftimesheetsPage implements OnInit {
  staffTimesheet: StaffTimesheet

  staffMember: any[]

  constructor(private navCtrl: NavController) {
    this.staffTimesheet = new StaffTimesheet();
   }

  ngOnInit() {
  }

  goRevenue()
  {
    this.navCtrl.navigateForward('revenue');
  }

  onStaffMember(){}
  onStaffMemberLeft(){}

  onStaffMemberSel(obj){}

}
