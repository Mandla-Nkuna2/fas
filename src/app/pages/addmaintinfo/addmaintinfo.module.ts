import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddmaintinfoPageRoutingModule } from './addmaintinfo-routing.module';

import { AddmaintinfoPage } from './addmaintinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddmaintinfoPageRoutingModule
  ],
  declarations: [AddmaintinfoPage]
})
export class AddmaintinfoPageModule {}
