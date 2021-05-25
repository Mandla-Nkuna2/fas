import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
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
        .collection('test3/Sup_ItemMakMod/tables')
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
        .collection('test3/Sup_ItemMakMod/tables')
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

  getAssetType() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('test3/Sup_ItemMakMod/tables')
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
  getAssetTypeLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('test3/Sup_ItemMakMod/tables')
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

  getCategory() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('test3/Mst_Item/tables')
        .ref.limit(this.limVal)
        .get()
        .then((mNm) => {
          let cat = [];
          mNm.docs.forEach((mNm) => {
            cat.push({ ItemCatg: mNm.get('ItemCatg') });
          });
          resolve(cat);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getCategoryLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('test3/Mst_Item/tables')
        .ref.get()
        .then((mNm) => {
          let cat = [];
          mNm.docs.forEach((mNm) => {
            cat.push({ ItemCatg: mNm.get('ItemCatg') });
          });
          resolve(cat);
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
        .collection('/test3/Sup_Colour/tables')
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
        .collection('/test3/Sup_Colour/tables')
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

  getDriver() {
    var mechanicGuid = '7E55FF15-8B93-4CC4-B488-BC0E6FE2971E';
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/test3/Mst_StaffDetails/tables/')
        .ref.where('StaffCatgGuid', '==', mechanicGuid)
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
        .collection('/test3/Sup_TyreSize/tables/')
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
        .collection('/test3/Sup_TyreSize/tables/')
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

  getMeterType() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/test3/Mst_Item/tables/')
        .ref.limit(this.limVal)
        .get()
        .then((mNm) => {
          let mType = [];
          mNm.docs.forEach((mNm) => {
            mType.push({ MeterType: mNm.get('MeterType') });
          });
          resolve(mType);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getMeterTypeLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/test3/Mst_Item/tables/')
        .ref.get()
        .then((mNm) => {
          let mType = [];
          mNm.docs.forEach((mNm) => {
            mType.push(mNm.get('MeterType'));
          });
          resolve(mType);
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
        .collection('test3/Mst_Item/tables')
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
        .collection('/test3/Mst_StaffDetails/tables/')
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
        .collection('/test3/Mst_StaffDetails/tables/')
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
        .collection('/test3/Mst_Item/tables/')
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
        .collection('/test3/Mst_Item/tables/')
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

  getAssetCompName() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/test3/Sup_CompName/tables')
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
  getAssetCompNameLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/test3/Sup_CompName/tables')
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
        .collection('/test3/Sup_CompMake/tables')
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
        .collection('/test3/Sup_CompMake/tables')
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
        .collection('/test3/Sup_CompModel/tables')
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
        .collection('/test3/Sup_CompModel/tables')
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
        .collection('/test3/Sup_ServIntval/tables')
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
  getServiceIntvlLeft() {}

  getLossType() {}
  getLossTypeLeft() {}

  getLossCntrlAct() {}
  getLossCntrlActLeft() {}

  getLocation() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/test3/Mst_Location/tables')
        .ref.limit(this.limVal)
        .get()
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
  getLocationLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/test3/Mst_Location/tables')
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
        .collection('/test3/Sup_CostCentre/tables')
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

  getJobCardNos() {}
  getJobCardNosLeft() {}

  getMaintananceType() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/test3/Sup_MaintType/tables')
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

  getMaintananceRzn() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/test3/Sup_MaintReason/tables')
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
        .collection('/test3/Mst_Supplier/tables')
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
        .collection('/test3/Mst_Supplier/tables')
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

  getClient() {}

  getFixedCostType() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/test3/Sup_FixedCostType/tables')
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

  getOverheadType() {}

  getAddittionalCost() {}

  getMaintEvRefNo() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/test3/Trn_MaintEvnt/tables')
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
        .collection('/test3/Trn_MaintEvnt/tables')
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
        .collection('/test3/Sup_StoreCatgItem/tables')
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
        .collection('/test3/Mst_OilStore/tables')
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
        .collection('/test3/Mst_Bowser/tables')
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
        .collection('/test3/Sys_UserGroup/tables')
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
        .collection('/test3/Mst_Users/tables')
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
        .collection('/test3/Sup_FuelType/tables')
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

  getAssetTypeClass() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/test3/Sup_ItemTypeClass/tables')
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
  getAssetTypeClassLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('/test3/Sup_ItemTypeClass/tables')
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
        .collection('/test3/Sup_ItemTypeCap/tables')
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
        .collection('/test3/Sup_ItemTypeCap/tables')
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
        .collection('/test3/Sup_OilMake/tables')
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
        .collection('/test3/Sup_OilGrade/tables')
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
        .collection('/test3/Sup_OilClass/tables')
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
        .collection('/test3/Sup_ServType/tables')
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
        .collection('/test3/Sup_SupplierCategory/tables')
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
}
