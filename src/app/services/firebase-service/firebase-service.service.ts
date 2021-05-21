import { AdditionalCost } from '../../models/capture/AdditionalCost.model';
import { AccidentManagement } from './../../models/capture/AccidentManagement.model';
import { TestAssets } from './../../models/capture/TestAssets.model';
import { Injectable, EventEmitter } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import {  AngularFirestore } from '@angular/fire/firestore';
import {Asset} from '../../models/capture/Asset.model';
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
import {JobCard} from '../../models/capture/JobCard.model';
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
import {LoadingService} from '../../services/loading-service/loading.service';
import {Trafficfine} from '../../models/capture/Trafficfine.model';
@Injectable({
    providedIn: 'root',
})

export class FirebaseService {
constructor(private afs: AngularFirestore, private loading: LoadingService)   {}

public writeData(collec: string, myData: any, id: string){
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

    // public saveAssetss(saveData: TestAssets){
    //   let res: any
    //   return res = this.writeData(Object.assign({}, saveData), saveData.id)
    // }

    // public saveAccidentManagement(saveData: AccidentManagement){
    //   let res: any
    //   return res = this.writeData(Object.assign({}, saveData), saveData.LossContGuid)
    // }

    // public saveAdditionalCost(saveData: AdditionalCost){
    //   let res: any
    //   return res = this.writeData(Object.assign({}, saveData), saveData.AddCostGuid)
    // }

    // public saveAsset(saveData: Asset){
    //   let res: any
    //   return res = this.writeData(Object.assign({}, saveData), saveData.generalInformation.ItemGuid)
    // }

    // public saveAutoCardDetail(saveData: AutoCard){
    //   let res: any
    //   return res = this.writeData(Object.assign({}, saveData), saveData.AutoCardGuid)
    // }

    // public saveBowserTransaction(saveData: BowserTransaction){
    //   let res: any
    //   return res = this.writeData(Object.assign({}, saveData), saveData.BowserTrnGuid)
    // }

    // public saveBowserTransfer(saveData: BowserTransfer){
    //   let res: any
    //   return res = this.writeData(Object.assign({}, saveData), saveData.FuelTransferGuid)
    // }

    // public saveDailyOperationRec(saveData: DailyOperationRec){
    //   let res: any
    //   return res = this.writeData(Object.assign({}, saveData), saveData.Itemguid)
    // }

    // public saveFixedCostsDet(saveData: FixedCostsDet){
    //   let res: any
    //   return res = this.writeData(Object.assign({}, saveData), saveData.FixedCostGuid)
    // }

    // public saveFixedCostTransfer(saveData: FixedCostTransfer){
    //   let res: any
    //   return res = this.writeData(Object.assign({}, saveData), saveData.FixedcostTransGuid)
    // }

    // public saveFuelIssue(saveData: FuelIssue){
    //   let res: any
    //   return res = this.writeData(Object.assign({}, saveData), saveData.FuelIssueGuid)
    // }

    // public saveFuelType(saveData: FuelType){
    //   let res: any
    //   return res = this.writeData(Object.assign({}, saveData), saveData.FuelTypeGuid)
    // }

    // public saveItemComponent(saveData: ItemComponent){
    //   let res: any
    //   return res = this.writeData(Object.assign({}, saveData), saveData.ItemCompGuid)
    // }

    // public saveItems(saveData: Item){
    //   let res: any
    //   return res = this.writeData(Object.assign({}, saveData), saveData.ItemGuid)
    // }

    // public saveJobCard(saveData: JobCard){
    //   let res: any
    //   return res = this.writeData(Object.assign({}, saveData), saveData.generalInformation.JobCardNo)
    // }

    // public saveLicCorAndSafInspcDates(saveData: LicCorAndSafInspcDates){
    //   let res: any
    //   return res = this.writeData(Object.assign({}, saveData), saveData.LicHistIndex)
    // }

    // public saveLossControl(saveData: LossControl){
    //   let res: any
    //   return res = this.writeData(Object.assign({}, saveData), saveData.LossContGuid)
    // }

    // public saveMaintenanceEvent(saveData: MaintenanceEvent){
    //   let res: any
    //   return res = this.writeData(Object.assign({}, saveData), saveData.MaintEvntGuid)
    // }

    // public saveOilIssue(saveData: OilIssue){
    //   let res: any
    //   return res = this.writeData(Object.assign({}, saveData), saveData.OilIssueGuid)
    // }

    // public saveOilOrFluidType(saveData: OilOrFluidType){
    //   let res: any
    //   return res = this.writeData(Object.assign({}, saveData), saveData.OilGuid)
    // }

    // public saveOilStoreTransaction(saveData: OilStoreTransaction){
    //   let res: any
    //   return res = this.writeData(Object.assign({}, saveData), saveData.OilStoreTrnGuid)
    // }

    // public saveOilStoreTransfer(saveData: OilStoreTransfer){
    //   let res: any
    //   return res = this.writeData(Object.assign({}, saveData), saveData.OilStoreTrnGuid)
    // }

    // public saveOverheadTransaction(saveData: OverheadTransaction){
    //   let res: any
    //   return res = this.writeData(Object.assign({}, saveData), saveData.OverheadGuid)
    // }

    // public saveRevenue(saveData: Revenue){
    //   let res: any
    //   return res = this.writeData(Object.assign({}, saveData), saveData.RevenueGuid)
    // }

    // public saveStaffTimesheet(saveData: StaffTimesheet){
    //   let res: any
    //   return res = this.writeData(Object.assign({}, saveData), saveData.Staff_TrnGuid)
    // }

    // public saveStoreIssue(saveData: StoreIssue){
    //   let res: any
    //   return res = this.writeData(Object.assign({}, saveData), saveData.StoreIssueGuid)
    // }

    // public saveSupplierDeposit(saveData: SupplierDeposit){
    //   let res: any
    //   return res = this.writeData(Object.assign({}, saveData), saveData.SupBalguid)
    // }

    // public saveTestAssets(saveData: TestAssets){
    //   let res: any
    //   return res = this.writeData(Object.assign({}, saveData), saveData.id)
    // }

    // public saveTrafficfine(saveData: Trafficfine){
    //   let res: any
    //   return res = this.writeData(Object.assign({}, saveData), saveData.TrafficFineGuid)
    // }
}
