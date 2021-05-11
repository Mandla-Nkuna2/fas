import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreissuePageRoutingModule } from './storeissue-routing.module';

import { StoreissuePage } from './storeissue.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreissuePageRoutingModule,
    ComponentsModule,
    IonicSelectableModule
  ],
  declarations: [StoreissuePage]
})
export class StoreissuePageModule {}
