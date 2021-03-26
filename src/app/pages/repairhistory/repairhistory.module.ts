import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepairhistoryPageRoutingModule } from './repairhistory-routing.module';

import { RepairhistoryPage } from './repairhistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepairhistoryPageRoutingModule
  ],
  declarations: [RepairhistoryPage]
})
export class RepairhistoryPageModule {}
