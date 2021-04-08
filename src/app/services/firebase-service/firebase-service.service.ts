import { Injectable, EventEmitter } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular'; 
import {  AngularFirestore } from '@angular/fire/firestore';
import {Asset} from '../../models/Asset.model';
import {LoadingService} from '../../services/loading-service/loading.service';
@Injectable({
    providedIn: 'root',
})
export class FirebaseService { 
constructor(
    private afs: AngularFirestore,
    private loading: LoadingService
)   {

}
    public saveAssets(assets: any, id: string) {
        const promise = new Promise((resolve, reject) => {
            this.loading.present('loading...').then(() =>   {
                this.afs.collection('test4/Sup_OilGrade/tables').doc(id).set(assets).then(() => {
                    this.loading.dismiss()
                    resolve('done')
                }).catch((error) => {
                    this.loading.dismiss();
                    reject(error)
                })
            })

        })
        return promise;
    }

}