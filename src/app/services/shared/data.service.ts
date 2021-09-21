import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Asset } from 'src/app/models/capture/Asset.model';

@Injectable({
  providedIn: 'root',
})
export default class DataService {
  asset: Asset;
  assetSubj = new BehaviorSubject<Asset>(null);

  constructor() {
    this.asset = new Asset();
    this.assetSubj.next(this.asset);
  }
}
