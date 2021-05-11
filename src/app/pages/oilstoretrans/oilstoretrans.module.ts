import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OilstoretransPageRoutingModule } from './oilstoretrans-routing.module';

import { OilstoretransPage } from './oilstoretrans.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OilstoretransPageRoutingModule,
    ComponentsModule,
    IonicSelectableModule,
  ],
  declarations: [OilstoretransPage]
})
export class OilstoretransPageModule {}
