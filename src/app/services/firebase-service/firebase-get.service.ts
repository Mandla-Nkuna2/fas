import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class FirebaseGetService {
  constructor(private afs: AngularFirestore) {}

  private limVal = 3;

  // getDataDynamic(dataLink: string){
  //   const promise = new Promise((resolve, reject) => {
  //     this.afs.collection(dataLink).ref.limit(3).get().then((mNm) => {
  //       let data = [];
  //       mNm.docs.forEach((mNm) => {
  //         data.push(
  //           {
  //             ItemMake:mNm.get('ItemMake'),
  //             ItemModel:mNm.get('ItemModel'),
  //             ItemMakMod:mNm.get('ItemMake') +" "+mNm.get('ItemModel'),
  //             ItemMakModGuid: mNm.get('ItemMakModGuid')
  //           }
  //           )
  //       })
  //       resolve(data)
  //     }).catch((err) => {
  //       reject(err)
  //     })
  //   })
  //   return promise
  // }

  getMakeAndModel() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Sup_ItemMakMod/tables')
        .ref.limit(this.limVal)
        .get()
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
  getMakeAndModelLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Sup_ItemMakMod/tables')
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

  getAssetMakMod() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Sup_ItemMakMod/tables')
        .ref.limit(this.limVal)
        .get()
        .then((mNm) => {
          let makeAndModel = [];
          mNm.docs.forEach((mNm) => {
            makeAndModel.push({
              make: mNm.get('ItemMake'),
              model: mNm.get('ItemModel'),
              guid: mNm.get('ItemMakModGuid'),
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
  getAssetMakModLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Sup_ItemMakMod/tables')
        .ref.get()
        .then((mNm) => {
          let makeAndModel = [];
          mNm.docs.forEach((mNm) => {
            makeAndModel.push({
              make: mNm.get('ItemMake'),
              model: mNm.get('ItemModel'),
              guid: mNm.get('ItemMakModGuid'),
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

  getColor() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_Colour/tables')
        .ref.limit(this.limVal)
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
  getColorLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_Colour/tables')
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

  getBattery() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_Battery/tables')
        .ref.limit(this.limVal)
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

  getBatteryLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_Battery/tables')
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

  getBatteryMake() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_BatteryMake/tables')
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

  getDriver() {
    var driversGuid = '15ED4D37-A09A-11D7-B6DA-0020ED939F96';
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Mst_StaffDetails/tables/')
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

  getTyreSize() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_TyreSize/tables/')
        .ref.limit(this.limVal)
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
  getTyreSizeLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_TyreSize/tables/')
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

  public getAsset() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Mst_Item/tables')
        .ref.get()
        .then((asset) => {
          let newAssets = [];
          asset.docs.forEach((asset) => {
            newAssets.push(asset.data());
          });
          resolve(newAssets);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getStaff() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Mst_StaffDetails/tables/')
        .ref.limit(this.limVal)
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
  getStaffLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Mst_StaffDetails/tables/')
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

  getRegistration() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Mst_Item/tables/')
        .ref.limit(this.limVal)
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
  getRegistrationLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Mst_Item/tables/')
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

  getCompName() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_CompName/tables')
        .ref.limit(this.limVal)
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
  getCompNameLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_CompName/tables')
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

  getAssetCompMake() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_CompMake/tables')
        .ref.limit(this.limVal)
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
  getAssetCompMakeLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_CompMake/tables')
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

  getAssetCompModel() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_CompModel/tables')
        .ref.limit(this.limVal)
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
  getAssetCompModelLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_CompModel/tables')
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

  getServiceIntvl() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_ServIntval/tables')
        .ref.limit(this.limVal)
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
  getServiceIntvlLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_ServIntval/tables')
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

  getLossType() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Sup_LossContType/tables')
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

  getLossCntrlAct() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Sup_LossContAct/tables')
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

  getLocation() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Mst_Location/tables')
        .ref.limit(this.limVal)
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
  getLocationLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Mst_Location/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              LocGuid: obj.get('LocGuid'),
              LocFullName: obj.get('LocFullName'),
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

  getCostCentre() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_CostCentre/tables')
        .ref.limit(this.limVal)
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
  getCostCentreLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_CostCentre/tables')
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

  getJobCardNos() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Trn_JobCards/tables')
        .ref.limit(this.limVal)
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
  getJobCardNosLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Trn_JobCards/tables')
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

  getMaintType() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_MaintType/tables')
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

  getMaintReason() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_MaintReason/tables')
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

  getSupplier() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Mst_Supplier/tables')
        .ref.limit(this.limVal)
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
  getSupplierLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Mst_Supplier/tables')
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

  getClient() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Mst_Client/tables')
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

  getFixedCostType() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_FixedCostType/tables')
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

  getOverheadType() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_OverheadType/tables')
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

  getAddittionalCost() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_AddCostDesc/tables')
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

  getMaintEvRefNo() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Trn_MaintEvnt/tables')
        .ref.limit(this.limVal)
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
  getMaintEvRefNoLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Trn_MaintEvnt/tables')
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

  getStoreItem() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_StoreCatgItem/tables')
        .ref.limit(this.limVal)
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
  getStoreItemLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_StoreCatgItem/tables')
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

  getOilStore() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Mst_OilStore/tables')
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

  getBowser() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Mst_Bowser/tables')
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

  getUserGroup() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sys_UserGroup/tables')
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

  getUser() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Mst_Users/tables')
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

  getFuelType() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_FuelType/tables')
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

  getTransmission() {}

  getItemType() {}
  getItemTypeLeft() {}

  getItemTypeClass() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_ItemTypeClass/tables')
        .ref.limit(this.limVal)
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
  getItemTypeClassLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_ItemTypeClass/tables')
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

  getTypeCapacity() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_ItemTypeCap/tables')
        .ref.limit(this.limVal)
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
  getTypeCapacityLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_ItemTypeCap/tables')
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

  getOilMake() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_OilMake/tables')
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

  getOilGrade() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_OilGrade/tables')
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

  getOilClass() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_OilClass/tables')
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

  getOhbTypes() {}

  getStaffCategory() {}

  getServiceType() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_ServType/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              ServTypeGuid: obj.get('ServTypeGuid'),
              ServType: Number(obj.get('ServType')),
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

  getSuppCat() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_SupplierCategory/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
            data.push({
              SuppCategoryGuid: obj.get('SuppCategoryGuid'),
              SuppCategory: Number(obj.get('SuppCategory')),
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

  getVoteCodes() {}

  getStoreCat() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/PMB_ELEC/Sup_StoreCatg/tables')
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

  getLossContType() {}

  getLossContAct() {}
}
