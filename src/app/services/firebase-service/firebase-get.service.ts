import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root',
})

export class FirebaseGetService {
    constructor(private afs: AngularFirestore)   {}

  getMakeAndModel(){
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

  getType(){
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
      this.afs.collection('test3/Mst_Item/tables').ref.get().then((mNm) => {
        let cat = [];
        mNm.docs.forEach((mNm) => {
          cat.push(mNm.get('ItemCatg'))
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
      this.afs.collection('/test3/Sup_Colour/tables').ref.get().then((mNm) => {
        let col = [];
        mNm.docs.forEach((mNm) => {
          col.push({
            color: mNm.get('Colour'),
            colorGuid: mNm.get('ColourGuid')
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

  }

  getTyreSize(){
    const promise = new Promise((resolve, reject) => {
      this.afs.collection('/test3/Sup_TyreSize/tables/').ref.get().then((mNm) => {
        let size = [];
        mNm.docs.forEach((mNm) => {
          size.push({
            tSize: mNm.get('TyreSize'),
            sGuid: mNm.get('TyreSizeGuid')
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

  getStaffGuid(){
    const promise = new Promise((resolve, reject) => {
      this.afs.collection('/test3/Mst_StaffDetails/tables/').ref.get().then((obj) => {
        let data = [];
        obj.docs.forEach((obj) => {
          data.push({
            guid: obj.get('StaffGuid'),
            code: obj.get('StaffCode')
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
