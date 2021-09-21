import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
@Component({
  selector: 'app-howto',
  templateUrl: './howto.page.html',
  styleUrls: ['./howto.page.scss'],
})
export class HowtoPage implements OnInit {
  vidObjs: any = [];

  constructor(private firebaseGetServ: FirebaseGetService) {}

  ngOnInit() {
    this.getStorageFiles();
  }

  getStorageFiles() {
    this.firebaseGetServ.getStorageFiles().then((mNm: any) => {
      this.vidObjs = mNm;
    });
  }
}
