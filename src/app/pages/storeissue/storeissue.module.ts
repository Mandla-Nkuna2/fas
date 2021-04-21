import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreissuePageRoutingModule } from './storeissue-routing.module';

import { StoreissuePage } from './storeissue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreissuePageRoutingModule
  ],
  declarations: [StoreissuePage]
})
export class StoreissuePageModule {}
