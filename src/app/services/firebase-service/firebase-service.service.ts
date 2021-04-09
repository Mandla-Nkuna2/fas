import { AdditionalCosts } from './../../models/AdditionalCosts.model';
import { AccidentManagement } from './../../models/AccidentManagement.model';
import { TestAssets } from './../../models/TestAssets.model';
import { Injectable, EventEmitter } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import {  AngularFirestore } from '@angular/fire/firestore';
import {Asset} from '../../models/Asset.model';
import AutoCardDetails from '../../models/AutoCardDetails.model';
import BowserTransactions from '../../models/BowserTransactions.model';
import BowserTransfer from '../../models/BowserTransfer.model';
import DailyOperationRec from '../../models/DailyOperationRec.model';
import FixedCostsDet from '../../models/FixedCostsDet.model';
import FixedCostTransfer from '../../models/FixedCostTransfer.model';
import FuelIssues from '../../models/FuelIssues.model';
import FuelType from '../../models/FuelType.model';
import ItemComponents from '../../models/ItemComponents.model';
import Items from '../../models/Items.model';
import {JobCard} from '../../models/JobCard.model';
import LicCorAndSafInspcDates from '../../models/LicCorAndSafInspcDates.models';
import LossControl from '../../models/LossControl.model';
import MaintenanceEvent from '../../models/MaintenanceEvent.model';
import OilIssues from '../../models/OilIssues.model';
import OilOrFluidType from '../../models/OilOrFluidType.model';
import OilStoreTransactions from '../../models/OilStoreTransactions.model';
import OilStoreTransfer from '../../models/OilStoreTransfer.model';
import OverheadTransactions from '../../models/OverheadTransactions.model';
import Revenue from '../../models/Revenue.model';
import StaffTimesheets from '../../models/StaffTimesheets.model';
import StoreIssues from '../../models/StoreIssues.model';
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

    public saveAdditionalCosts(testAsset: AdditionalCosts){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.AddCostGuid)
    }

    public saveAsset(testAsset: Asset){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.generalInformation.ItemGuidReg)
    }

    public saveAutoCardDetails(testAsset: AutoCardDetails){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.AutoCardGuidItemGuid)
    }

    public saveBowserTransactions(testAsset: BowserTransactions){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.BowserTrnGuid)
    }

    public saveBowserTransfer(testAsset: BowserTransfer){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.FuelTransferGuid)
    }

    public saveDailyOperationRec(testAsset: DailyOperationRec){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.registration)
    }

    public saveFixedCostsDet(testAsset: FixedCostsDet){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.FixedCostGuid)
    }

    public saveFixedCostTransfer(testAsset: FixedCostTransfer){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.TItemGuid)
    }

    public saveFuelIssues(testAsset: FuelIssues){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.FuelIssueGuid)
    }

    public saveFuelType(testAsset: FuelType){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.FuelTypeGuid)
    }

    public saveItemComponents(testAsset: ItemComponents){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.ItemCompGuid)
    }

    public saveItems(testAsset: Items){
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

    public saveOilIssues(testAsset: OilIssues){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.OilIssueGuid)
    }

    public saveOilOrFluidType(testAsset: OilOrFluidType){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.OilGuid)
    }

    public saveOilStoreTransactions(testAsset: OilStoreTransactions){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.OilStoreTrnGuid)
    }

    public saveOilStoreTransfer(testAsset: OilStoreTransfer){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.OilStoreTrnGuid)
    }

    public saveOverheadTransactions(testAsset: OverheadTransactions){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.OverheadGuid)
    }

    public saveRevenue(testAsset: Revenue){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.RevenueGuid)
    }

    public saveStaffTimesheets(testAsset: StaffTimesheets){
      let res: any
      return res = this.writeData(Object.assign({}, testAsset), testAsset.Staff_TrnGuid)
    }

    public saveStoreIssues(testAsset: StoreIssues){
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
          this.afs.collection('myTest3').doc(id).set(myData).then(() => {
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
