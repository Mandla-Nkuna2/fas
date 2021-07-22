import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class FirebaseReportService {
  constructor(private afs: AngularFirestore) {}

  private limVal = 3;

  public getAsset() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Mst_Item/tables')
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

  public getItemComponents() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Mst_ItemComponents/tables')
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

  public getLossControls() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Trn_LossControl/tables')
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

  public getDailyOperations() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Trn_PlantSheets/tables')
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

  public getMaintEvent() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Trn_MaintEvnt/tables')
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

  public getMaintEventLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Trn_MaintEvnt/tables')
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
        .collection('PMB_ELEC/Trn_Revenue/tables')
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

  getLocationsLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Mst_Location/tables')
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
        .collection('PMB_ELEC/Mst_FixedCosts/tables')
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

  public getFixedCostTransfer() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Trn_FixedCosts/tables')
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

  public getOverheadTransf() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Trn_Overheads/tables')
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

  public getAdditionalCosts() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Trn_AdditionalCosts/tables')
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

  public getSupplierDeposits() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Trn_SuppBalance/tables')
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

  public getAutocards() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Mst_Autocard/tables')
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

  public getStoreIssues() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Trn_StoreIssue/tables')
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

  public getOilIssues() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Trn_OilIssue/tables')
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

  public getFuelIssues() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Trn_FuelIssue/tables')
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

  public getOilStoreTrans() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Trn_OilStores/tables')
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

  public getOilStoreTransf() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Trn_OilStoreTransfer/tables')
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

  public getBowserTransactions() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Trn_Bowsers/tables')
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

  public getBowserTransfers() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Trn_BowserTransfer/tables')
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

  public getStaffTimesheets() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Trn_StaffTime/tables')
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

  public getStaffAuditTrails() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Trn_AuditTrail/tables')
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

  public getStaffProReport() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Trn_StaffTime/tables')
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

  public getStaffProdTime() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Trn_StaffProdTime/tables')
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

  public getStaff() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Mst_StaffDetails/tables')
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

  public getUsers() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Mst_Users/tables')
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

  public getClients() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Mst_Client/tables')
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

  public getItemTypes() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Sup_ItemType/tables')
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

  public getItemMakeMod() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Sup_ItemMakMod/tables')
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

  public getBowsers() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Mst_Bowser/tables')
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

  public getLocationLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Mst_Location/tables')
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
        .collection('PMB_ELEC/Mst_Supplier/tables')
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

  public getServiceScheduleTasks() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Trn_ServScheduleHistory/tables')
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

  public getJobcardsLeft() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Trn_JobCards/tables')
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
        .collection('PMB_ELEC/Mst_StaffDetails/tables')
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

  public getOverheadBudget() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Trn_OverheadBud/tables')
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

  public getVotecodes() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Trn_Votecodes/tables')
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

  public getFirstAutoRespCodes() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Sup_Response/tables')
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

  public getOiltypes() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Sup_Oiltype/tables')
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

  public getCostcentre() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Sup_CostCentre/tables')
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

  public getOilstores() {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection('PMB_ELEC/Mst_OilStore/tables')
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
}
