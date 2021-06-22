import { AdditionalCost } from '../../models/capture/AdditionalCost.model';
import { AccidentManagement } from './../../models/capture/AccidentManagement.model';
import { TestAssets } from './../../models/capture/TestAssets.model';
import { Injectable, EventEmitter } from '@angular/core';
import {
  AlertController,
  LoadingController,
  ToastController,
} from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Asset } from '../../models/capture/Asset.model';
import AutoCard from '../../models/capture/Autocard.model';
import BowserTransaction from '../../models/capture/BowserTransaction.model';
import BowserTransfer from '../../models/capture/BowserTransfer.model';
import DailyOperationRec from '../../models/capture/DailyOperationRec.model';
import FixedCostsDet from '../../models/capture/FixedCostsDet.model';
import FixedCostTransfer from '../../models/capture/FixedCostTransfer.model';
import FuelIssue from '../../models/capture/FuelIssue.model';
import FuelType from '../../models/capture/FuelType.model';
import ItemComponent from '../../models/capture/ItemComponent.model';
import Item from '../../models/capture/Item.model';
import { JobCard } from '../../models/capture/JobCard.model';
import LicCorAndSafInspcDates from '../../models/capture/LicCorAndSafInspcDates.model';
import LossControl from '../../models/capture/LossControl.model';
import MaintenanceEvent from '../../models/capture/MaintenanceEvent.model';
import OilIssue from '../../models/capture/OilIssue.model';
import OilOrFluidType from '../../models/capture/OilOrFluidType.model';
import OilStoreTransaction from '../../models/capture/OilStoreTransaction.model';
import OilStoreTransfer from '../../models/capture/OilStoreTransfer.model';
import OverheadTransaction from '../../models/capture/OverheadTransaction.model';
import Revenue from '../../models/capture/Revenue.model';
import StaffTimesheet from '../../models/capture/StaffTimesheet.model';
import StoreIssue from '../../models/capture/StoreIssue.model';
import SupplierDeposit from '../../models/capture/SupplierDeposit.model';
import { LoadingService } from '../../services/loading-service/loading.service';
import { Trafficfine } from '../../models/capture/Trafficfine.model';
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private afs: AngularFirestore, private loading: LoadingService) {}

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
}
