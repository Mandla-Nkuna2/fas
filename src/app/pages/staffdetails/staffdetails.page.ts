import { Component, OnInit } from '@angular/core';
import Staff from 'src/app/models/supportdata/StaffDetails.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-staffdetails',
  templateUrl: './staffdetails.page.html',
  styleUrls: ['./staffdetails.page.scss'],
})
export class StaffdetailsPage implements OnInit {
  staff: Staff;

  staffCat: any[];

  constructor(
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {}

  ngOnInit() {}

  onStaffCat() {}
  onStaffCatLeft() {}

  onAdd() {
    this.firebaseService
      .writeData('myTest', this.staff, this.staff.StaffGuid)
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully =)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
  onModify() {}
  onDeActivate() {}
  onClear() {}
}
