import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import StaffTimesheet from 'src/app/models/StaffTimesheet.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-stafftimesheets',
  templateUrl: './stafftimesheets.page.html',
  styleUrls: ['./stafftimesheets.page.scss'],
})
export class StafftimesheetsPage implements OnInit {
  staffTimesheet: StaffTimesheet

  staffMember: any[]

  constructor(private navCtrl: NavController,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper, private firebaseGetServ:
    FirebaseGetService) {
    this.staffTimesheet = new StaffTimesheet();
   }

  ngOnInit() {
    // this.onStaffMember()
  }

  goRevenue()
  {
    this.navCtrl.navigateForward('revenue');
  }

  onStaffMember(){
    this.firebaseGetServ.getStaff().then((mNm: any) => {
      this.staffMember = mNm
    })
  }
  onStaffMemberLeft(){
    this.firebaseGetServ.getStaffLeft().then((mNm: any) => {
      this.staffMember = mNm
    })
  }
}
