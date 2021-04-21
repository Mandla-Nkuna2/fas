import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LosscontrolPageRoutingModule } from './losscontrol-routing.module';

import { LosscontrolPage } from './losscontrol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LosscontrolPageRoutingModule
  ],
  declarations: [LosscontrolPage]
})
export class LosscontrolPageModule {}
