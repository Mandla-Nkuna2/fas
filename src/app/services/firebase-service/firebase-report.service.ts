import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

const limVal = 3;
@Injectable({
  providedIn: 'root',
})
export class FirebaseReportService {
  private organization = 'PMB_ELEC';

  constructor(private afs: AngularFirestore) {}

  public getAsset() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Mst_Item/tables')
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

  public getAssetLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Mst_Item/tables')
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

  public getItemComponents() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Mst_ItemComponents/tables')
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

  public getLossControls() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Trn_LossControl/tables')
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

  public getDailyOperations() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Trn_PlantSheets/tables')
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

  public getMaintEvent() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Trn_MaintEvnt/tables')
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

  public getMaintEventLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Trn_MaintEvnt/tables')
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

  public getRevenue() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Trn_Revenue/tables')
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

  getLocationsLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Mst_Location/tables')
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

  public getFixedCostDetails() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Mst_FixedCosts/tables')
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

  public getFixedCostTransfer() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Trn_FixedCosts/tables')
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

  public getOverheadTransf() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Trn_Overheads/tables')
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

  public getAdditionalCosts() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Trn_AdditionalCosts/tables')
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

  public getSupplierDeposits() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Trn_SuppBalance/tables')
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

  public getAutocards() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Mst_Autocard/tables')
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

  public getStoreIssues() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Trn_StoreIssue/tables')
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

  public getOilIssues() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Trn_OilIssue/tables')
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

  public getFuelIssues() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Trn_FuelIssue/tables')
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

  public getOilStoreTrans() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Trn_OilStores/tables')
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

  public getOilStoreTransf() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Trn_OilStoreTransfer/tables')
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

  public getBowserTransactions() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Trn_Bowsers/tables')
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

  public getBowserTransfers() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Trn_BowserTransfer/tables')
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

  public getStaffTimesheets() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Trn_StaffTime/tables')
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

  public getStaffAuditTrails() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Trn_AuditTrail/tables')
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

  public getStaffProReport() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Trn_StaffTime/tables')
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

  public getStaffProdTime() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Trn_StaffProdTime/tables')
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

  public getStaff() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Mst_StaffDetails/tables')
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

  public getUsers() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Mst_Users/tables')
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

  public getClients() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Mst_Client/tables')
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

  public getItemTypes() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Sup_ItemType/tables')
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

  public getItemMakeMod() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Sup_ItemMakMod/tables')
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

  public getBowsers() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Mst_Bowser/tables')
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

  public getLocationLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Mst_Location/tables')
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

  public getSuppliers() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Mst_Supplier/tables')
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

  public getServiceScheduleTasks() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Trn_ServScheduleHistory/tables')
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

  public getJobcardsLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Trn_JobCards/tables')
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

  public getStaffDetails() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Mst_StaffDetails/tables')
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

  public getOverheadBudget() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Trn_OverheadBud/tables')
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

  public getVotecodes() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Trn_Votecodes/tables')
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

  public getFirstAutoRespCodes() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Sup_Response/tables')
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

  public getOiltypes() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Sup_Oiltype/tables')
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

  public getCostcentre() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Sup_CostCentre/tables')
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

  public getOilstores() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Mst_OilStore/tables')
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

  public getComponentNames() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Sup_CompName/tables')
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

  public getStoreCategories() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Sup_StoreCatg/tables')
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

  public getServiceTypes() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Sup_ServType/tables')
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

  getVehiclesCount() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Mst_Item/tables')
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

  public getFleet() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Mst_Item/tables')
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

  public getStaffleft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(this.organization + '/Mst_StaffDetails/tables')
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
}
