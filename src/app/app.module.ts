import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {PopupHelper} from './services/helpers/popup-helper';
import {LoadingService} from './services/loading-service/loading.service';
import {ToastService} from './services/toast/toast.service';
import {EventService} from './services/event-service/event.service';
import { AngularFireModule } from '@angular/fire';
import { IonicStorageModule } from '@ionic/storage';

import { firebaseConfig } from './app.firebase.config';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot({mode:'md'}), 
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [
    PopupHelper,
    LoadingService,
    ToastService,
    EventService,
    AngularFirestore,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
