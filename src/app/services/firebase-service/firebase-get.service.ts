import { Injectable, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

const limVal = 10;
@Injectable({
  providedIn: 'root',
})
export class FirebaseGetService {
  menuEmitter: EventEmitter<boolean>;

  constructor(private afs: AngularFirestore) {
    this.menuEmitter = new EventEmitter();
  }

  public setloggedInState(value: boolean) {
    this.menuEmitter.emit(value);
  }

  getAssetMakenModel(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_ItemMakMod/tables')
        .ref.limit(limVal)
        .get()
        .then((mNm) => {
          let makeAndModel = [];
          mNm.docs.forEach((mNm) => {
            makeAndModel.push({
              ItemMakModGuid: mNm.get('ItemMakModGuid'),
              ItemMake: mNm.get('ItemMake'),
              ItemModel: mNm.get('ItemModel'),
              ItemMakMod: mNm.get('ItemMake') + ' ' + mNm.get('ItemModel'),
            });
          });
          resolve(makeAndModel);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getAssetMakenModelLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_ItemMakMod/tables')
        .ref.get()
        .then((mNm) => {
          let makeAndModel = [];
          mNm.docs.forEach((mNm) => {
            makeAndModel.push({
              ItemMake: mNm.get('ItemMake'),
              ItemModel: mNm.get('ItemModel'),
              ItemMakMod: mNm.get('ItemMake') + ' ' + mNm.get('ItemModel'),
              ItemMakModGuid: mNm.get('ItemMakModGuid'),
            });
          });
          resolve(makeAndModel);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getColor(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_Colour/tables')
        .ref.limit(limVal)
        .get()
        .then((mNm) => {
          let col = [];
          mNm.docs.forEach((mNm) => {
            col.push({
              Colour: mNm.get('Colour'),
              ColourGuid: mNm.get('ColourGuid'),
            });
          });
          resolve(col);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getColorLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_Colour/tables')
        .ref.get()
        .then((mNm) => {
          let col = [];
          mNm.docs.forEach((mNm) => {
            col.push({
              Colour: mNm.get('Colour'),
              ColourGuid: mNm.get('ColourGuid'),
            });
          });
          resolve(col);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getBattery(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_Battery/tables')
        .ref.limit(limVal)
        .get()
        .then((mNm) => {
          let col = [];
          mNm.docs.forEach((mNm) => {
            col.push({
              BatteryGuid: mNm.get('BatteryGuid'),
              BatterySize: mNm.get('BatterySize'),
              BatteryMakeGuid: mNm.get('BatteryMakeGuid'),
              BatteryMake: '',
              BatteryText: '',
            });
          });
          resolve(col);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getBatteryLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_Battery/tables')
        .ref.get()
        .then((mNm) => {
          let col = [];
          mNm.docs.forEach((mNm) => {
            col.push({
              BatteryGuid: mNm.get('BatteryGuid'),
              BatterySize: mNm.get('BatterySize'),
              BatteryMakeGuid: mNm.get('BatteryMakeGuid'),
              BatteryMake: '',
              BatteryText: '',
            });
          });
          resolve(col);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getBatteryMake(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_BatteryMake/tables')
        .ref.get()
        .then((mNm) => {
          let col = [];
          mNm.docs.forEach((mNm) => {
            col.push({
              BatteryMakeGuid: mNm.get('BatteryMakeGuid'),
              BatteryMake: mNm.get('BatteryMake'),
            });
          });
          resolve(col);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getDriver(organization) {
    const driversGuid = '15ED4D37-A09A-11D7-B6DA-0020ED939F96';
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_StaffDetails/tables/')
        .ref.where('StaffCatgGuid', '==', driversGuid)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              StaffGuid: obj.get('StaffGuid'),
              StaffCode: obj.get('StaffCode'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getTyreSize(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_TyreSize/tables/')
        .ref.limit(limVal)
        .get()
        .then((mNm) => {
          let size = [];
          mNm.docs.forEach((mNm) => {
            size.push({
              TyreSize: mNm.get('TyreSize'),
              TyreSizeGuid: mNm.get('TyreSizeGuid'),
            });
          });
          resolve(size);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getTyreSizeLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_TyreSize/tables/')
        .ref.get()
        .then((mNm) => {
          let size = [];
          mNm.docs.forEach((mNm) => {
            size.push({
              TyreSize: mNm.get('TyreSize'),
              TyreSizeGuid: mNm.get('TyreSizeGuid'),
            });
          });
          resolve(size);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getAsset(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Item/tables')
        .ref.get()
        .then((objs) => {
          let data = [];
          objs.docs.forEach((obj) => {
            data.push(obj.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getStaff(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_StaffDetails/tables/')
        .ref.limit(limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              StaffGuid: obj.get('StaffGuid'),
              StaffCode: obj.get('StaffCode'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getStaffLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_StaffDetails/tables/')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              StaffGuid: obj.get('StaffGuid'),
              StaffCode: obj.get('StaffCode'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getStaffRateLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_StaffDetails/tables/')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((objEl) => {
            data.push(objEl.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getRegistration(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Item/tables/')
        .ref.limit(limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              ItemGuid: obj.get('ItemGuid'),
              Reg: obj.get('Reg'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getRegistrationLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Item/tables/')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              ItemGuid: obj.get('ItemGuid'),
              Reg: obj.get('Reg'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getCompName(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_CompName/tables')
        .ref.limit(limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              CompNameGuid: obj.get('CompNameGuid'),
              CompName: obj.get('CompName'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getCompNameLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_CompName/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              CompNameGuid: obj.get('CompNameGuid'),
              CompName: obj.get('CompName'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getAssetMakeModMake(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_ItemMakMod/tables')
        .ref.limit(limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              ItemMakModGuid: obj.get('ItemMakModGuid'),
              ItemMake: obj.get('ItemMake'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getAssetMakeModMakeLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_ItemMakMod/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              ItemMakModGuid: obj.get('ItemMakModGuid'),
              ItemMake: obj.get('ItemMake'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getAssetMakeModMod(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_ItemMakMod/tables')
        .ref.limit(limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              ItemMakModGuid: obj.get('ItemMakModGuid'),
              ItemModel: obj.get('ItemModel'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getAssetMakeModModleft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_ItemMakMod/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              ItemMakModGuid: obj.get('ItemMakModGuid'),
              ItemModel: obj.get('ItemModel'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getItemComp(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_ItemComponents/tables')
        .ref.limit(limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              ItemCompGuid: obj.get('ItemCompGuid'),
              CompNameGuid: obj.get('CompNameGuid'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getItemCompLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_ItemComponents/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              ItemCompGuid: obj.get('ItemCompGuid'),
              CompNameGuid: obj.get('CompNameGuid'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getItemCompMake(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_CompMake/tables')
        .ref.limit(limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              CompMakeGuid: obj.get('CompMakeGuid'),
              CompMake: obj.get('CompMake'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getItemCompMakeLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_CompMake/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              CompMakeGuid: obj.get('CompMakeGuid'),
              CompMake: obj.get('CompMake'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getItemCompModel(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_CompModel/tables')
        .ref.limit(limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              CompModelGuid: obj.get('CompModelGuid'),
              CompModel: obj.get('CompModel'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getItemCompModelLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_CompModel/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              CompModelGuid: obj.get('CompModelGuid'),
              CompModel: obj.get('CompModel'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getServiceIntvl(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_ServIntval/tables')
        .ref.limit(limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              ServIntvalGuid: obj.get('ServIntvalGuid'),
              ServIntval: Number(obj.get('ServIntval')),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getServiceIntvlLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_ServIntval/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              ServIntvalGuid: obj.get('ServIntvalGuid'),
              ServIntval: Number(obj.get('ServIntval')),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getLossType(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_LossContType/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              LossContTypeguid: obj.get('LossContTypeguid'),
              LossContType: obj.get('LossContType'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getLossCntrlAct(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_LossContAct/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              LossContActGuid: obj.get('LossContActGuid'),
              LossContAct: obj.get('LossContAct'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getLocation(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Location/tables')
        .ref.limit(limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              LocGuid: obj.get('LocGuid'),
              LocDesc: obj.get('LocDesc'),
              //LocFullName: obj.get('LocFullName'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getLocationLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Location/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              LocGuid: obj.get('LocGuid'),
              LocDesc: obj.get('LocDesc'),
              //LocFullName: obj.get('LocFullName'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getCostCentre(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_CostCentre/tables')
        .ref.limit(limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              CostCentGuid: obj.get('CostCentGuid'),
              CostCentName: obj.get('CostCentName'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getCostCentreLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_CostCentre/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              CostCentGuid: obj.get('CostCentGuid'),
              CostCentName: obj.get('CostCentName'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getJobCardNos(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_JobCards/tables')
        .ref.limit(limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              JobCardGuid: obj.get('JobCardGuid'),
              JobCardNo: obj.get('JobCardNo'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getJobCardNosLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_JobCards/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              JobCardGuid: obj.get('JobCardGuid'),
              JobCardNo: obj.get('JobCardNo'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getMaintType(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_MaintType/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              MaintTypeGuid: obj.get('MaintTypeGuid'),
              MaintType: obj.get('MaintType'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getMaintReason(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_MaintReason/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              MaintReasonGuid: obj.get('MaintReasonGuid'),
              MaintReason: obj.get('MaintReason'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getSupplier(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Supplier/tables')
        .ref.limit(limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              SuppGuid: obj.get('SuppGuid'),
              SuppName: obj.get('SuppName'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getSupplierLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Supplier/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              SuppGuid: obj.get('SuppGuid'),
              SuppName: obj.get('SuppName'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getClient(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Client/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              ClientGuid: obj.get('ClientGuid'),
              ClientName: obj.get('ClientName'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getFixedCostType(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_FixedCostType/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              FixedCostTypeGuid: obj.get('FixedCostTypeGuid'),
              FixedCostType: obj.get('FixedCostType'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getOverheadType(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_OverheadType/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              OverheadTypeGuid: obj.get('OverheadTypeGuid'),
              OverheadType: obj.get('OverheadType'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getAddittionalCost(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_AddCostDesc/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              AddCostDescGuid: obj.get('AddCostDescGuid'),
              AddCostDesc: obj.get('AddCostDesc'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getMaintEvRefNo(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_MaintEvnt/tables')
        .ref.limit(limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              MaintEvntGuid: obj.get('MaintEvntGuid'),
              RefNo: obj.get('RefNo'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getMaintEvRefNoLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_MaintEvnt/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              MaintEvntGuid: obj.get('MaintEvntGuid'),
              RefNo: obj.get('RefNo'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getStoreItem(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_StoreCatgItem/tables')
        .ref.limit(limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              StoreCatgGuid: obj.get('StoreCatgGuid'),
              StoreCatgItem: obj.get('StoreCatgItem'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getStoreItemLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_StoreCatgItem/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              StoreCatgGuid: obj.get('StoreCatgGuid'),
              StoreCatgItem: obj.get('StoreCatgItem'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getOilStore(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_OilStore/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              OilStoreGuid: obj.get('OilStoreGuid'),
              OilStoreName: obj.get('OilStoreName'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getBowser(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Bowser/tables')
        .ref.limit(limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              BowserGuid: obj.get('BowserGuid'),
              BowserName: obj.get('BowserName'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getBowserLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Bowser/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              BowserGuid: obj.get('BowserGuid'),
              BowserName: obj.get('BowserName'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getUserGroup(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sys_UserGroup/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              UserGroupGuid: obj.get('UserGroupGuid'),
              UserGroupTitle: obj.get('UserGroupTitle'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getUsers(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Users/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              UserGuid: obj.get('UserGuid'),
              UserFirstName: obj.get('UserFirstName'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getFuelType(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_FuelType/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              FuelTypeGuid: obj.get('FuelTypeGuid'),
              FuelType: obj.get('FuelType'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getItemType(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_ItemType/tables')
        .ref.get()
        .then((mNm) => {
          let data = [];
          mNm.docs.forEach((mNm) => {
            data.push({
              ItemTypeGuid: mNm.get('ItemTypeGuid'),
              ItemTypeNameGuid: mNm.get('ItemTypeNameGuid'),
              ItemTypeClassGuid: mNm.get('ItemTypeClassGuid'),
              ItemTypeCapGuid: mNm.get('ItemTypeCapGuid'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getAssetTypeName(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_ItemTypeName/tables')
        .ref.limit(limVal)
        .get()
        .then((mNm) => {
          let data = [];
          mNm.docs.forEach((mNm) => {
            data.push({
              ItemTypeNameGuid: mNm.get('ItemTypeNameGuid'),
              ItemTypeName: mNm.get('ItemTypeName'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getAssetTypeNameLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_ItemTypeName/tables')
        .ref.get()
        .then((mNm) => {
          let data = [];
          mNm.docs.forEach((mNm) => {
            data.push({
              ItemTypeNameGuid: mNm.get('ItemTypeNameGuid'),
              ItemTypeName: mNm.get('ItemTypeName'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getItemTypeClass(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_ItemTypeClass/tables')
        .ref.limit(limVal)
        .get()
        .then((mNm) => {
          let data = [];
          mNm.docs.forEach((mNm) => {
            data.push({
              ItemTypeClassGuid: mNm.get('ItemTypeClassGuid'),
              ItemTypeClass: mNm.get('ItemTypeClass'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getItemTypeClassLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_ItemTypeClass/tables')
        .ref.get()
        .then((mNm) => {
          let data = [];
          mNm.docs.forEach((mNm) => {
            data.push({
              ItemTypeClassGuid: mNm.get('ItemTypeClassGuid'),
              ItemTypeClass: mNm.get('ItemTypeClass'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getTypeCapacity(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_ItemTypeCap/tables')
        .ref.limit(limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              ItemTypeCapGuid: obj.get('ItemTypeCapGuid'),
              ItemTypeCap: obj.get('ItemTypeCap'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getTypeCapacityLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_ItemTypeCap/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              ItemTypeCapGuid: obj.get('ItemTypeCapGuid'),
              ItemTypeCap: obj.get('ItemTypeCap'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getOilType(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_Oiltype/tables')
        .ref.limit(limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              OilGuid: obj.get('OilGuid'),
              OilMakeGuid: obj.get('OilMakeGuid'),
              OilMake: '',
              OilGradeGuid: obj.get('OilGradeGuid'),
              OilGrade: '',
              OilClassGuid: obj.get('OilClassGuid'),
              OilClass: '',
              OilText: '',
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getOilTypeLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_Oiltype/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              OilGuid: obj.get('OilGuid'),
              OilMakeGuid: obj.get('OilMakeGuid'),
              OilMake: '',
              OilGradeGuid: obj.get('OilGradeGuid'),
              OilGrade: '',
              OilClassGuid: obj.get('OilClassGuid'),
              OilClass: '',
              OilText: '',
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getOilMake(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_OilMake/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              OilMakeGuid: obj.get('OilMakeGuid'),
              OilMake: obj.get('OilMake'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getOilGrade(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_OilGrade/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              OilGradeGuid: obj.get('OilGradeGuid'),
              OilGrade: obj.get('OilGrade'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getOilClass(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_OilClass/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              OilClassGuid: obj.get('OilClassGuid'),
              OilClass: obj.get('OilClass'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getOhbTypes(organization) {}

  getStaffCategory(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_StaffCategory/tables')
        .ref.limit(limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              StaffCatgGuid: obj.get('StaffCatgGuid'),
              StaffCatg: obj.get('StaffCatg'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getStaffCategoryLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_StaffCategory/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              StaffCatgGuid: obj.get('StaffCatgGuid'),
              StaffCatg: obj.get('StaffCatg'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getServiceType(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_ServType/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              ServTypeGuid: obj.get('ServTypeGuid'),
              ServType: obj.get('ServType'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getSuppCat(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_SupplierCategory/tables')
        .ref.limit(limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              SuppCategoryGuid: obj.get('SuppCategoryGuid'),
              SuppCategory: obj.get('SuppCategory'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getSuppCatLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_SupplierCategory/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              SuppCategoryGuid: obj.get('SuppCategoryGuid'),
              SuppCategory: obj.get('SuppCategory'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getVoteCodes(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_Votecodes/tables')
        .ref.limit(limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              VoteCodeGuid: obj.get('VoteCodeGuid'),
              Votecode: obj.get('Votecode'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getVoteCodesLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_Votecodes/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              VoteCodeGuid: obj.get('VoteCodeGuid'),
              Votecode: obj.get('Votecode'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getVoteCodesDesc(organization) {}

  getStoreCat(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_StoreCatg/tables')
        .ref.limit(limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              StoreCatgGuid: obj.get('StoreCatgGuid'),
              StoreCatg: obj.get('StoreCatg'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getStoreCatLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_StoreCatg/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              StoreCatgGuid: obj.get('StoreCatgGuid'),
              StoreCatg: obj.get('StoreCatg'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getLossContType(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_LossContType/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              LossContTypeguid: obj.get('LossContTypeguid'),
              LossContType: obj.get('LossContType'),
            });
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getLossContAct(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_LossContAct/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              LossContActGuid: obj.get('LossContActGuid'),
              LossContAct: obj.get('LossContAct'),
            });
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
