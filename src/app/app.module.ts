import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { FirebaseGetService } from './services/firebase-service/firebase-get.service';
import { SignaturePadModule } from 'angular2-signaturepad';
import { ClickOutsideModule } from 'ng-click-outside';
import { ComponentsModule } from './components/components.module';
import { IonicSelectableModule } from 'ionic-selectable';
import { AdditionalcostComponent } from 'src/app/components/reports/additionalcost/additionalcost.component'


@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot({mode:'md'}),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    SignaturePadModule,
    ClickOutsideModule,
    ComponentsModule,
    IonicSelectableModule,
  ],
  providers: [
    PopupHelper,
    LoadingService,
    ToastService,
    EventService,
    AngularFirestore,
    FirebaseGetService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
