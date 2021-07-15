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
  staffCats: any[];
  addLicView = false;
  licCodes = ['A', 'A1', 'B', 'C', 'C1', 'EB', 'EC', 'EC1'];

  constructor(
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.staff = new Staff();
  }

  ngOnInit() {
    this.onStaffCat();
  }

  onStaffCat() {
    this.firebaseGetServ.getStaffCategory().then((mNm: any) => {
      this.staffCats = mNm;
    });
  }
  onStaffCatLeft() {
    this.firebaseGetServ.getStaffCategoryLeft().then((mNm: any) => {
      this.staffCats = mNm;
    });
  }

  onAddLicView() {
    this.addLicView = !this.addLicView;
  }

  onAddLic() {}

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
        'Mst_StaffDetails',
        Object.assign({}, this.staff),
        this.staff.StaffGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
  onModify() {}
  onDeActivate() {}
  onClear() {}
}
