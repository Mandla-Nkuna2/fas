import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssetdetailPageRoutingModule } from './assetdetail-routing.module';

import { AssetdetailPage } from './assetdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssetdetailPageRoutingModule
  ],
  declarations: [AssetdetailPage]
})
export class AssetdetailPageModule {}
