import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssetsinfoPageRoutingModule } from './assetsinfo-routing.module';

import { AssetsinfoPage } from './assetsinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssetsinfoPageRoutingModule
  ],
  declarations: [AssetsinfoPage]
})
export class AssetsinfoPageModule {}
