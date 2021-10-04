import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { LoadingService } from '../../services/loading-service/loading.service';
import { Asset } from 'src/app/models/capture/Asset.model';
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  asset: Asset;
  assetSubj = new BehaviorSubject<Asset>(null);

  constructor(private afs: AngularFirestore, private loading: LoadingService) {
    this.asset = new Asset();
    this.assetSubj.next(this.asset);
  }

  public writeData(collec: string, doc: any, myData: any, id: any) {
    const promise = new Promise((resolve, reject) => {
      this.loading.present('loading...').then(() => {
        this.afs
          .collection(collec)
          .doc(doc)
          .collection('tables')
          .doc(id)
          .set(myData)
          .then(() => {
            this.loading.dismiss();
            resolve('done');
          })
          .catch((err) => {
            this.loading.dismiss();
            reject(err);
          });
      });
    });
    return promise;
  }

  public write(collec: string, doc: any, myData: any, id: any) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(collec)
        .doc(doc)
        .collection('tables')
        .doc(id)
        .set(myData)
        .then(() => {
          resolve('done');
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
}
