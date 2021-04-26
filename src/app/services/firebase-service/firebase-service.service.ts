import { AdditionalCost } from '../../models/AdditionalCost.model';
import { AccidentManagement } from './../../models/AccidentManagement.model';
import { TestAssets } from './../../models/TestAssets.model';
import { Injectable, EventEmitter } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import {  AngularFirestore } from '@angular/fire/firestore';
import {Asset} from '../../models/Asset.model';
import AutoCard from '../../models/Autocard.model';
import BowserTransaction from '../../models/BowserTransaction.model';
import BowserTransfer from '../../models/BowserTransfer.model';
import DailyOperationRec from '../../models/DailyOperationRec.model';
import FixedCostsDet from '../../models/FixedCostsDet.model';
import FixedCostTransfer from '../../models/FixedCostTransfer.model';
import FuelIssue from '../../models/FuelIssue.model';
import FuelType from '../../models/FuelType.model';
import ItemComponent from '../../models/ItemComponent.model';
import Item from '../../models/Item.model';
import {JobCard} from '../../models/JobCard.model';
import LicCorAndSafInspcDates from '../../models/LicCorAndSafInspcDates.model';
import LossControl from '../../models/LossControl.model';
import MaintenanceEvent from '../../models/MaintenanceEvent.model';
import OilIssue from '../../models/OilIssue.model';
import OilOrFluidType from '../../models/OilOrFluidType.model';
import OilStoreTransaction from '../../models/OilStoreTransaction.model';
import OilStoreTransfer from '../../models/OilStoreTransfer.model';
import OverheadTransaction from '../../models/OverheadTransaction.model';
import Revenue from '../../models/Revenue.model';
import StaffTimesheet from '../../models/StaffTimesheet.model';
import StoreIssue from '../../models/StoreIssue.model';
import SupplierDeposit from '../../models/SupplierDeposit.model';
import {LoadingService} from '../../services/loading-service/loading.service';
import {Trafficfine} from '../../models/Trafficfine.model';
@Injectable({
    providedIn: 'root',
})

export class FirebaseService {
constructor(private afs: AngularFirestore, private loading: LoadingService)   {}

    public saveAssetss(testAsset: TestAssets){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.id)
    }

    public saveAccidentManagement(testAsset: AccidentManagement){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.LossContGuid)
    }

    public saveAdditionalCost(testAsset: AdditionalCost){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.AddCostGuid)
    }

    public saveAsset(testAsset: Asset){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.generalInformation.ItemGuid)
    }

    public saveAutoCardDetail(testAsset: AutoCard){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.AutoCardGuid)
    }

    public saveBowserTransaction(testAsset: BowserTransaction){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.BowserTrnGuid)
    }

    public saveBowserTransfer(testAsset: BowserTransfer){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.FuelTransferGuid)
    }

    public saveDailyOperationRec(testAsset: DailyOperationRec){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.Itemguid)
    }

    public saveFixedCostsDet(testAsset: FixedCostsDet){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.FixedCostGuid)
    }

    public saveFixedCostTransfer(testAsset: FixedCostTransfer){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.FixedcostTransGuid)
    }

    public saveFuelIssue(testAsset: FuelIssue){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.FuelIssueGuid)
    }

    public saveFuelType(testAsset: FuelType){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.FuelTypeGuid)
    }

    public saveItemComponent(testAsset: ItemComponent){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.ItemCompGuid)
    }

    public saveItems(testAsset: Item){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.ItemGuid)
    }

    public saveJobCard(testAsset: JobCard){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.generalInformation.JobCardNo)
    }

    public saveLicCorAndSafInspcDates(testAsset: LicCorAndSafInspcDates){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.LicHistIndex)
    }

    public saveLossControl(testAsset: LossControl){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.LossContGuid)
    }

    public saveMaintenanceEvent(testAsset: MaintenanceEvent){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.MaintEvntGuid)
    }

    public saveOilIssue(testAsset: OilIssue){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.OilIssueGuid)
    }

    public saveOilOrFluidType(testAsset: OilOrFluidType){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.OilGuid)
    }

    public saveOilStoreTransaction(testAsset: OilStoreTransaction){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.OilStoreTrnGuid)
    }

    public saveOilStoreTransfer(testAsset: OilStoreTransfer){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.OilStoreTrnGuid)
    }

    public saveOverheadTransaction(testAsset: OverheadTransaction){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.OverheadGuid)
    }

    public saveRevenue(testAsset: Revenue){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.RevenueGuid)
    }

    public saveStaffTimesheet(testAsset: StaffTimesheet){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.Staff_TrnGuid)
    }

    public saveStoreIssue(testAsset: StoreIssue){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.StoreIssueGuid)
    }

    public saveSupplierDeposit(testAsset: SupplierDeposit){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.SupBalguid)
    }

    public saveTestAssets(testAsset: TestAssets){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.id)
    }

    public saveTrafficfine(testAsset: Trafficfine){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.TrafficFineGuid)
    }

    public writeData(myData: any, id: string){
      const promise = new Promise((resolve, reject) => {
        this.loading.present('loading...').then(() => {
          this.afs.collection('myTest').doc(id).set(myData).then(() => {
            this.loading.dismiss()
            resolve('done')
          }).catch((err) => {
            this.loading.dismiss();
            reject(err)
          })
        })
      })
      return promise
    }

}
