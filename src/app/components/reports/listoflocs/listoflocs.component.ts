import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-listoflocs',
  templateUrl: './listoflocs.component.html',
  styleUrls: ['./listoflocs.component.scss'],
})
export class ListoflocsComponent implements OnInit {
  constructor(
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
  ) {}

  ngOnInit() {}
}
