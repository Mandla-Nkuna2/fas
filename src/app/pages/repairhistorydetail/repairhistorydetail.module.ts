import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepairhistorydetailPageRoutingModule } from './repairhistorydetail-routing.module';

import { RepairhistorydetailPage } from './repairhistorydetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepairhistorydetailPageRoutingModule
  ],
  declarations: [RepairhistorydetailPage]
})
export class RepairhistorydetailPageModule {}
