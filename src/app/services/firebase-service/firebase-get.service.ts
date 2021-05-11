import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root',
})

export class FirebaseGetService {
    constructor(private afs: AngularFirestore)   {}

    private limVal = 3

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


  getMakeAndModel(){
    const promise = new Promise((resolve, reject) => {
      this.afs.collection('test3/Sup_ItemMakMod/tables').ref.limit(this.limVal).get().then((mNm) => {
        let makeAndModel = [];
        mNm.docs.forEach((mNm) => {
          makeAndModel.push(
            {
              ItemMake:mNm.get('ItemMake'),
              ItemModel:mNm.get('ItemModel'),
              ItemMakMod:mNm.get('ItemMake') +" "+mNm.get('ItemModel'),
              ItemMakModGuid: mNm.get('ItemMakModGuid')
            }
            )
        })
        resolve(makeAndModel)
      }).catch((err) => {
        reject(err)
      })
    })
    return promise
  }

  getMakeAndModelLeft(){
    const promise = new Promise((resolve, reject) => {
      this.afs.collection('test3/Sup_ItemMakMod/tables').ref.get().then((mNm) => {
        let makeAndModel = [];
        mNm.docs.forEach((mNm) => {
          makeAndModel.push(
            {
              ItemMake:mNm.get('ItemMake'),
              ItemModel:mNm.get('ItemModel'),
              ItemMakMod:mNm.get('ItemMake') +" "+mNm.get('ItemModel'),
              ItemMakModGuid: mNm.get('ItemMakModGuid')
            }
            )
        })
        resolve(makeAndModel)
      }).catch((err) => {
        reject(err)
      })
    })
    return promise
  }

  getType(){
    const promise = new Promise((resolve, reject) => {
      this.afs.collection('test3/Sup_ItemMakMod/tables').ref.limit(this.limVal).get().then((mNm) => {
        let makeAndModel = [];
        mNm.docs.forEach((mNm) => {
          makeAndModel.push(
            {
              make:mNm.get('ItemMake'),
              model:mNm.get('ItemModel'),
              guid: mNm.get('ItemMakModGuid')
            }
            )
        })
        resolve(makeAndModel)
      }).catch((err) => {
        reject(err)
      })
    })
    return promise
  }

  getTypeLeft(){
    const promise = new Promise((resolve, reject) => {
      this.afs.collection('test3/Sup_ItemMakMod/tables').ref.get().then((mNm) => {
        let makeAndModel = [];
        mNm.docs.forEach((mNm) => {
          makeAndModel.push(
            {
              make:mNm.get('ItemMake'),
              model:mNm.get('ItemModel'),
              guid: mNm.get('ItemMakModGuid')
            }
            )
        })
        resolve(makeAndModel)
      }).catch((err) => {
        reject(err)
      })
    })
    return promise
  }

  getCategory(){
    const promise = new Promise((resolve, reject) => {
      this.afs.collection('test3/Mst_Item/tables').ref.limit(this.limVal).get().then((mNm) => {
        let cat = [];
        mNm.docs.forEach((mNm) => {
          cat.push({ItemCatg: mNm.get('ItemCatg')})
        })
        resolve(cat)
      }).catch((err) => {
        reject(err)
      })
    })
    return promise
  }

  getCategoryLeft(){
    const promise = new Promise((resolve, reject) => {
      this.afs.collection('test3/Mst_Item/tables').ref.get().then((mNm) => {
        let cat = [];
        mNm.docs.forEach((mNm) => {
          cat.push({ItemCatg: mNm.get('ItemCatg')})
        })
        resolve(cat)
      }).catch((err) => {
        reject(err)
      })
    })
    return promise
  }

  getColor(){
    const promise = new Promise((resolve, reject) => {
      this.afs.collection('/test3/Sup_Colour/tables').ref.limit(this.limVal).get().then((mNm) => {
        let col = [];
        mNm.docs.forEach((mNm) => {
          col.push({
            Colour: mNm.get('Colour'),
            ColourGuid: mNm.get('ColourGuid')
          })
        })
        resolve(col)
      }).catch((err) => {
        reject(err)
      })
    })
    return promise
  }
  getColorLeft(){
    const promise = new Promise((resolve, reject) => {
      this.afs.collection('/test3/Sup_Colour/tables').ref.get().then((mNm) => {
        let col = [];
        mNm.docs.forEach((mNm) => {
          col.push({
            Colour: mNm.get('Colour'),
            ColourGuid: mNm.get('ColourGuid')
          })
        })
        resolve(col)
      }).catch((err) => {
        reject(err)
      })
    })
    return promise
  }

  getDriver(){
    const promise = new Promise((resolve, reject) => {
      this.afs.collection('/test3/Mst_StaffDetails/tables/').ref.limit(this.limVal).get().then((obj) => {
        let data = [];
        obj.docs.forEach((obj) => {
          data.push({
            StaffGuid: obj.get('StaffGuid'),
            StaffCode: obj.get('StaffCode')
          })
        })
        resolve(data)
      }).catch((err) => {
        reject(err)
      })
    })
    return promise
  }

  getTyreSize(){
    const promise = new Promise((resolve, reject) => {
      this.afs.collection('/test3/Sup_TyreSize/tables/').ref.limit(this.limVal).get().then((mNm) => {
        let size = [];
        mNm.docs.forEach((mNm) => {
          size.push({
            TyreSize: mNm.get('TyreSize'),
            TyreSizeGuid: mNm.get('TyreSizeGuid')
          })
        })
        resolve(size)
      }).catch((err) => {
        reject(err)
      })
    })
    return promise
  }

  getTyreSizeLeft(){
    const promise = new Promise((resolve, reject) => {
      this.afs.collection('/test3/Sup_TyreSize/tables/').ref.get().then((mNm) => {
        let size = [];
        mNm.docs.forEach((mNm) => {
          size.push({
            TyreSize: mNm.get('TyreSize'),
            TyreSizeGuid: mNm.get('TyreSizeGuid')
          })
        })
        resolve(size)
      }).catch((err) => {
        reject(err)
      })
    })
    return promise
  }

  getMeterType(){
    const promise = new Promise((resolve, reject) => {
      this.afs.collection('/test3/Mst_Item/tables/').ref.limit(this.limVal).get().then((mNm) => {
        let mType = [];
        mNm.docs.forEach((mNm) => {
          mType.push({MeterType: mNm.get('MeterType')})
        })
        resolve(mType)
      }).catch((err) => {
        reject(err)
      })
    })
    return promise
  }

  getMeterTypeLeft(){
    const promise = new Promise((resolve, reject) => {
      this.afs.collection('/test3/Mst_Item/tables/').ref.get().then((mNm) => {
        let mType = [];
        mNm.docs.forEach((mNm) => {
          mType.push(mNm.get('MeterType'))
        })
        resolve(mType)
      }).catch((err) => {
        reject(err)
      })
    })
    return promise
  }

  public getAsset(){
    const promise = new Promise((resolve, reject) => {
      this.afs.collection('test3/Mst_Item/tables').ref.get().then((asset) => {
        let newAssets = [];
        asset.docs.forEach((asset) => {
          newAssets.push(asset.data())
        })
        resolve(newAssets)
      }).catch((err) => {
        reject(err)
      })
    })
    return promise
  }

  getStaff(){
    const promise = new Promise((resolve, reject) => {
      this.afs.collection('/test3/Mst_StaffDetails/tables/').ref.limit(this.limVal).get().then((obj) => {
        let data = [];
        obj.docs.forEach((obj) => {
          data.push({
            StaffGuid: obj.get('StaffGuid'),
            StaffCode: obj.get('StaffCode')
          })
        })
        resolve(data)
      }).catch((err) => {
        reject(err)
      })
    })
    return promise
  }

  getStaffLeft(){
    const promise = new Promise((resolve, reject) => {
      this.afs.collection('/test3/Mst_StaffDetails/tables/').ref.get().then((obj) => {
        let data = [];
        obj.docs.forEach((obj) => {
          data.push({
            StaffGuid: obj.get('StaffGuid'),
            StaffCode: obj.get('StaffCode')
          })
        })
        resolve(data)
      }).catch((err) => {
        reject(err)
      })
    })
    return promise
  }
}
