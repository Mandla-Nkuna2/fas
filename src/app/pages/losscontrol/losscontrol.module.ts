import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LosscontrolPageRoutingModule } from './losscontrol-routing.module';

import { LosscontrolPage } from './losscontrol.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicSelectableModule } from 'ionic-selectable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LosscontrolPageRoutingModule,
    ComponentsModule,
    IonicSelectableModule,
  ],
  declarations: [LosscontrolPage]
})
export class LosscontrolPageModule {}
