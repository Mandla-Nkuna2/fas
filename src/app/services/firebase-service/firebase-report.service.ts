import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseReportService {
  limVal = 3;
  constructor(private afs: AngularFirestore) {}

  public getAsset(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Item/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getAssetLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Item/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getAssetMore(organization) {
    const promise = new Promise((resolve, reject) => {
      this.limVal += 3;
      this.afs
        .collection(organization + '/Mst_Item/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  // onInfiniteScroll(event) {
  //   this.limit += 10; // or however many more you want to load
  //   this.itemRef.limitToFirst(limit).once('value', (itemList) => {
  //     let items = [];
  //     itemList.forEach((item) => {
  //       items.push(item.val());
  //       return false;
  //     });

  //     this.itemList = items;
  //     this.loadeditemList = items;
  //   });
  // }

  public getItemComponents(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_ItemComponents/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getLossControls(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_LossControl/tables')
        .ref.orderBy('Capturedate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getLossCtrlCt(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_LossControl/tables')
        .ref.get()
        .then((obj) => {
          let count = 0;
          count = obj.size;
          resolve(count);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getDailyOperations(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_PlantSheets/tables')
        .ref.orderBy('Capturedate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getLicHistory(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_LicHistory/tables')
        .ref.orderBy('Capturedate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getMaintEvent(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_MaintEvnt/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getMaintEventLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_MaintEvnt/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getRevenue(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_Revenue/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limit(4)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
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
        .ref.orderBy('CaptureDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
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

  getLocationsLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Location/tables')
        .ref.get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obj) => {
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

  public getFixedCostDetails(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_FixedCosts/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getFixedCostTransfer(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_FixedCosts/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getOverheadTransf(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_Overheads/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getAdditionalCosts(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_AdditionalCosts/tables')
        .ref.orderBy('Capturedate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getSupplierDeposits(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_SuppBalance/tables')
        .ref.orderBy('Capturedate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getAutocards(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Autocard/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getStoreIssues(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_StoreIssue/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getOilIssues(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_OilIssue/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getFuelIssues(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_FuelIssue/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getOilStoreTrans(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_OilStores/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getOilStoreTransf(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_OilStoreTransfer/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getBowserTransactions(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_Bowsers/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getBowserTransfers(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_BowserTransfer/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getStaffTimesheets(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_StaffTime/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getStaffAuditTrails(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_AuditTrail/tables')
        .ref.limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getStaffProReport(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_StaffTime/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getStaffProdTime(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_StaffProdTime/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getUsers(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Users/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getUserGroups(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sys_UserGroup/tables')
        .ref.orderBy('CapDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getClients(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Client/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getItemTypes(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_ItemType/tables')
        .ref.orderBy('CapDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getItemMakeMod(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_ItemMakMod/tables')
        .ref.orderBy('CapDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getBowsers(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Bowser/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getSuppliers(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Supplier/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getServiceScheduleTasks(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_Checklist/tables')
        .ref.orderBy('CapDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getJobcardsLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_JobCards/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getStaffDetails(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_StaffDetails/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getStaffleft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_StaffDetails/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getOverheadBudget(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_OverheadBud/tables')
        .ref.orderBy('CapDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getVotecodes(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_Votecodes/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getFirstAutoRespCodes(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_Response/tables')
        .ref.orderBy('CapDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getOiltypes(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_Oiltype/tables')
        .ref.orderBy('CapDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getCostcentre(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_CostCentre/tables')
        .ref.orderBy('Capturedate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getOilstores(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_OilStore/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getComponentNames(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_CompName/tables')
        .ref.orderBy('CapDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getStoreCategories(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_StoreCatg/tables')
        .ref.orderBy('CapDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getServiceTypes(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_ServType/tables')
        .ref.orderBy('CapDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getVehicles(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Item/tables')
        .ref.where('ItemCatg', 'in', [
          'VEHICLES',
          'LIGHT LOAD VEHICLE',
          'HEAVY LOAD VEHICLE',
        ])
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getFleet(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Item/tables')
        .ref //.where('StaffGuid', '!=', '')
        .where('ItemCatg', '==', 'VEHICLES')
        .orderBy('CaptureDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((obj) => {
          let data = [];
          obj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getUser(email) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('InnTee/Mst_Users/tables')
        .ref.where('UserLogin', '==', email)
        .get()
        .then((obj) => {
          let data = {};
          obj.docs.forEach((obj) => {
            data = obj.data();
          });
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getDocsCount(organization, coll) {
    const promise = new Promise((resolve, reject) => {
      let count = 0;
      this.afs
        .collection(organization + '/' + coll + '/tables')
        .ref.get()
        .then((obj) => {
          count = obj.size;
          resolve(count);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
}
