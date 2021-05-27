import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-changedregistration',
  templateUrl: './changedregistration.component.html',
  styleUrls: ['./changedregistration.component.scss'],
})
export class ChangedregistrationComponent implements OnInit {
  constructor(
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
  ) {}

  ngOnInit() {}
}
