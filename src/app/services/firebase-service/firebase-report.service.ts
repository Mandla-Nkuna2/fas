import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class FirebaseReportService {
  constructor(private afs: AngularFirestore) {}

  private limVal = 3;

  public getAsset() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Mst_Item/tables')
        .ref.limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getItemComponents() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Mst_ItemComponents/tables')
        .ref.limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
}
