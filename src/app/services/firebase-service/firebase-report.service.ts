import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

const limVal = 3;
@Injectable({
  providedIn: 'root',
})
export class FirebaseReportService {
  constructor(private afs: AngularFirestore) {}

  public getAsset(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Item/tables')
        .ref.limit(limVal)
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

  public getItemComponents(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_ItemComponents/tables')
        .ref.limit(limVal)
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
        .ref.limit(limVal)
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

  public getDailyOperations(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_PlantSheets/tables')
        .ref.limit(limVal)
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
        .ref.limit(limVal)
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
        .ref.limit(4)
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
        .ref.limit(limVal)
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
        .ref.limit(limVal)
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
        .ref.limit(limVal)
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
        .ref.limit(limVal)
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
        .ref.limit(limVal)
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
        .ref.limit(limVal)
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
        .ref.limit(limVal)
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
        .ref.limit(limVal)
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
        .ref.limit(limVal)
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
        .ref.limit(limVal)
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
        .ref.limit(limVal)
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
        .ref.limit(limVal)
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
        .ref.limit(limVal)
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
        .ref.limit(limVal)
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
        .ref.limit(limVal)
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
        .ref.limit(limVal)
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
        .ref.limit(limVal)
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

  public getStaff(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_StaffDetails/tables')
        .ref.limit(limVal)
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
        .limit(limVal)
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
        .limit(limVal)
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
        .ref.limit(limVal)
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
        .ref //.orderBy('CapDate', 'desc')
        .limit(limVal)
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
        .ref.limit(limVal)
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

  public getLocationLeft(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Location/tables')
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

  public getSuppliers(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Supplier/tables')
        .ref.limit(limVal)
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
        .ref.limit(limVal)
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

  public getStaffDetails(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_StaffDetails/tables')
        .ref.limit(limVal)
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
        .ref.limit(limVal)
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
        .ref.limit(limVal)
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
        .ref.limit(limVal)
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
        .ref.limit(limVal)
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
        .ref.limit(limVal)
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
        .ref.limit(limVal)
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
        .ref.limit(limVal)
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
        .ref.limit(limVal)
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
        .ref.limit(limVal)
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

  getVehiclesCount(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Item/tables')
        .ref.where('ItemCatg', '==', 'VEHICLES')
        .get()
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

  public getFleet(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Item/tables')
        .ref //.where('StaffGuid', '!=', '')
        .where('ItemCatg', '==', 'VEHICLES')
        .limit(limVal)
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
