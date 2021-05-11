import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintainceventPageRoutingModule } from './maintaincevent-routing.module';

import { MaintainceventPage } from './maintaincevent.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintainceventPageRoutingModule,
    ComponentsModule,
    IonicSelectableModule,
  ],
  declarations: [MaintainceventPage]
})
export class MaintainceventPageModule {}
