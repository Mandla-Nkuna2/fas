import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore/firestore';

@Injectable({
    providedIn: 'root',
})

export class FirebaseGetService {
    constructor(
        private afs: AngularFirestore
    )   {

    }

    public getOilGrade() {
        const promise = new Promise((resolve, reject) => {
            this.afs.collection('test3/Sup_OilGrade/tables').ref.get().then((oilGrades) =>   {
                let newOilGrades = [];
                oilGrades.docs.forEach((oilGrade) =>    {
                    newOilGrades.push(oilGrade.data())
                })
                resolve(newOilGrades);
            }).catch((error) =>    {
                reject(error);
            })
        })
        return promise;
    }
    public getOilMake() {
        const promise = new Promise((resolve, reject) => {
            this.afs.collection('test3/Sup_OilMake/tables').ref.get().then((oilGrades) =>   {
                let newOilGrades = [];
                oilGrades.docs.forEach((oilGrade) =>    {
                    newOilGrades.push(oilGrade.data())
                })
                resolve(newOilGrades);
            }).catch((error) =>    {
                reject(error);
            })
        })
        return promise;
    }
}