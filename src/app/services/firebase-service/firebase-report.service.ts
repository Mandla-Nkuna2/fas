import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseReportService {
  limVal = 3;
  first: any;
  last: any;
  constructor(private afs: AngularFirestore) {}

  public getAsset(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Item/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getAssetNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Item/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getAssetPrev(organization) {
    console.log(this.last);
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Item/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getAssetLast(organization) {
    console.log(this.last);
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Item/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  public getItemComps(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_ItemComponents/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getItemCompsNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_ItemComponents/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getItemCompsPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_ItemComponents/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getItemCompsLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_ItemComponents/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getLossControlsNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_LossControl/tables')
        .ref.orderBy('Capturedate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getLossControlsPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_LossControl/tables')
        .ref.orderBy('Capturedate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getLossControlsLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_LossControl/tables')
        .ref.orderBy('Capturedate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          let count = 0;
          count = ssObj.size;
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getDailyOperationsNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_PlantSheets/tables')
        .ref.orderBy('Capturedate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getDailyOperationsPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_PlantSheets/tables')
        .ref.orderBy('Capturedate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getDailyOperationsLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_PlantSheets/tables')
        .ref.orderBy('Capturedate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getLicHistoryNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_LicHistory/tables')
        .ref.orderBy('Capturedate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getLicHistoryPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_LicHistory/tables')
        .ref.orderBy('Capturedate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getLicHistoryLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_LicHistory/tables')
        .ref.orderBy('Capturedate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getMaintEventNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_MaintEvnt/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getMaintEventPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_MaintEvnt/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getMaintEventLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_MaintEvnt/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getRevenueNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_Revenue/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .startAfter(this.last)
        .limit(4)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getRevenuePrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_Revenue/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .endBefore(this.first)
        .limitToLast(4)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getRevenueLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_Revenue/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limitToLast(4)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obj) => {
            data.push(obj.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getLocationNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Location/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obj) => {
            data.push(obj.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getLocationPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Location/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obj) => {
            data.push(obj.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getLocationLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Location/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obj) => {
            data.push(obj.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obj) => {
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getFixedCostDetailsNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_FixedCosts/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getFixedCostDetailsPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_FixedCosts/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getFixedCostDetailsLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_FixedCosts/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getFixedCostTransferNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_FixedCosts/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getFixedCostTransferPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_FixedCosts/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getFixedCostTransferLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_FixedCosts/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getOverheadTransfNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_Overheads/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getOverheadTransfPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_Overheads/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getOverheadTransfLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_Overheads/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getAdditionalCostsNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_AdditionalCosts/tables')
        .ref.orderBy('Capturedate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getAdditionalCostsPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_AdditionalCosts/tables')
        .ref.orderBy('Capturedate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getAdditionalCostsLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_AdditionalCosts/tables')
        .ref.orderBy('Capturedate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getSupplierDepositsNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_SuppBalance/tables')
        .ref.orderBy('Capturedate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getSupplierDepositsPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_SuppBalance/tables')
        .ref.orderBy('Capturedate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getSupplierDepositsLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_SuppBalance/tables')
        .ref.orderBy('Capturedate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getAutocardsNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Autocard/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getAutocardsPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Autocard/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getAutocardsLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Autocard/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getStoreIssuesNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_StoreIssue/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getStoreIssuesPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_StoreIssue/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getStoreIssuesLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_StoreIssue/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getOilIssuesNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_OilIssue/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getOilIssuesPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_OilIssue/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getOilIssuesLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_OilIssue/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getFuelIssuesNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_FuelIssue/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getFuelIssuesPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_FuelIssue/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getFuelIssuesLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_FuelIssue/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getOilStoreTransNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_OilStores/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getOilStoreTransPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_OilStores/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getOilStoreTransLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_OilStores/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getOilStoreTransfNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_OilStoreTransfer/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getOilStoreTransfPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_OilStoreTransfer/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getOilStoreTransfLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_OilStoreTransfer/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getBowserTransactionsNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_Bowsers/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getBowserTransactionsPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_Bowsers/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getBowserTransactionsLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_Bowsers/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getBowserTransfersNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_BowserTransfer/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getBowserTransfersPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_BowserTransfer/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getBowserTransfersLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_BowserTransfer/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getStaffTimesheetsNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_StaffTime/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getStaffTimesheetsPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_StaffTime/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getStaffTimesheetsLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_StaffTime/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getStaffAuditTrailsNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_AuditTrail/tables')
        .ref.startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getStaffAuditTrailsPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_AuditTrail/tables')
        .ref.endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getStaffAuditTrailsLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_AuditTrail/tables')
        .ref.limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getStaffProReportNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_StaffTime/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getStaffProReportPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_StaffTime/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getStaffProReportLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_StaffTime/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getUsersNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Users/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getUsersPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Users/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getUsersLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Users/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getUserGroupsNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sys_UserGroup/tables')
        .ref.orderBy('CapDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getUserGroupsPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sys_UserGroup/tables')
        .ref.orderBy('CapDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getUserGroupsLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sys_UserGroup/tables')
        .ref.orderBy('CapDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getClientsNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Client/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getClientsPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Client/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getClientsLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Client/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getItemTypesNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_ItemType/tables')
        .ref.orderBy('CapDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getItemTypesPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_ItemType/tables')
        .ref.orderBy('CapDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getItemTypesLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_ItemType/tables')
        .ref.orderBy('CapDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getItemMakeModNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_ItemMakMod/tables')
        .ref.orderBy('CapDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getItemMakeModPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_ItemMakMod/tables')
        .ref.orderBy('CapDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getItemMakeModLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_ItemMakMod/tables')
        .ref.orderBy('CapDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getBowsersNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Bowser/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getBowsersPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Bowser/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getBowsersLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Bowser/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getSuppliersNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Supplier/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getSuppliersPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Supplier/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getSuppliersLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Supplier/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getServiceScheduleTasksNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_Checklist/tables')
        .ref.orderBy('CapDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getServiceScheduleTasksPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_Checklist/tables')
        .ref.orderBy('CapDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getServiceScheduleTasksLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_Checklist/tables')
        .ref.orderBy('CapDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getStaffDetailsNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_StaffDetails/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getStaffDetailsPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_StaffDetails/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getStaffDetailsLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_StaffDetails/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getOverheadBudgetNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_OverheadBud/tables')
        .ref.orderBy('CapDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getOverheadBudgetPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_OverheadBud/tables')
        .ref.orderBy('CapDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getOverheadBudgetLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_OverheadBud/tables')
        .ref.orderBy('CapDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getVotecodesNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_Votecodes/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getVotecodesPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_Votecodes/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getVotecodesLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Trn_Votecodes/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getFirstAutoRespCodesNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_Response/tables')
        .ref.orderBy('CapDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getFirstAutoRespCodesPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_Response/tables')
        .ref.orderBy('CapDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getFirstAutoRespCodesLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_Response/tables')
        .ref.orderBy('CapDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getCostcentreNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_CostCentre/tables')
        .ref.orderBy('Capturedate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getCostcentrePrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_CostCentre/tables')
        .ref.orderBy('Capturedate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getCostcentreLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_CostCentre/tables')
        .ref.orderBy('Capturedate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getOilstoresNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_OilStore/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getOilstoresPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_OilStore/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getOilstoresLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_OilStore/tables')
        .ref.orderBy('CaptureDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getComponentNamesNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_CompName/tables')
        .ref.orderBy('CapDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getComponentNamesPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_CompName/tables')
        .ref.orderBy('CapDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getComponentNamesLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_CompName/tables')
        .ref.orderBy('CapDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getStoreCategoriesNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_StoreCatg/tables')
        .ref.orderBy('CapDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getStoreCategoriesPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_StoreCatg/tables')
        .ref.orderBy('CapDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getStoreCategoriesLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_StoreCatg/tables')
        .ref.orderBy('CapDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getServiceTypesNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_ServType/tables')
        .ref.orderBy('CapDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getServiceTypesPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_ServType/tables')
        .ref.orderBy('CapDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public getServiceTypesLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Sup_ServType/tables')
        .ref.orderBy('CapDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .orderBy('CaptureDate', 'desc')
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getVehiclesNext(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Item/tables')
        .ref.where('ItemCatg', 'in', [
          'VEHICLES',
          'LIGHT LOAD VEHICLE',
          'HEAVY LOAD VEHICLE',
        ])
        .orderBy('CaptureDate', 'desc')
        .startAfter(this.last)
        .limit(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getVehiclesPrev(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Item/tables')
        .ref.where('ItemCatg', 'in', [
          'VEHICLES',
          'LIGHT LOAD VEHICLE',
          'HEAVY LOAD VEHICLE',
        ])
        .orderBy('CaptureDate', 'desc')
        .endBefore(this.first)
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  getVehiclesLast(organization) {
    const promise = new Promise((resolve, reject) => {
      this.afs
        .collection(organization + '/Mst_Item/tables')
        .ref.where('ItemCatg', 'in', [
          'VEHICLES',
          'LIGHT LOAD VEHICLE',
          'HEAVY LOAD VEHICLE',
        ])
        .orderBy('CaptureDate', 'desc')
        .limitToLast(this.limVal)
        .get()
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
            data.push(obElem.data());
          });
          this.first = ssObj.docs[0];
          this.last = ssObj.docs[ssObj.docs.length - 1];
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
        .then((ssObj) => {
          if (!ssObj.size) {
            resolve(null);
            return;
          }
          let data = [];
          ssObj.docs.forEach((obElem) => {
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
        .then((ssObj) => {
          let data = {};
          ssObj.docs.forEach((obj) => {
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
        .then((ssObj) => {
          count = ssObj.size;
          resolve(count);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
}
