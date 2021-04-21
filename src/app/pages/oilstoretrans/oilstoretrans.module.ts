import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OilstoretransPageRoutingModule } from './oilstoretrans-routing.module';

import { OilstoretransPage } from './oilstoretrans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OilstoretransPageRoutingModule
  ],
  declarations: [OilstoretransPage]
})
export class OilstoretransPageModule {}
