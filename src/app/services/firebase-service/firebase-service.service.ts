import { Injectable, EventEmitter } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular'; 
import {  AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root',
})
export class FirebaseService { 
constructor(
    private afs: AngularFirestore
)   {

}
}