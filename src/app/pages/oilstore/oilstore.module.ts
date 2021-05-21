import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OilstorePageRoutingModule } from './oilstore-routing.module';

import { OilstorePage } from './oilstore.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OilstorePageRoutingModule,
    IonicSelectableModule,
  ],
  declarations: [OilstorePage]
})
export class OilstorePageModule {}
