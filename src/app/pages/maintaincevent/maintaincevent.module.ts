import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintainceventPageRoutingModule } from './maintaincevent-routing.module';

import { MaintainceventPage } from './maintaincevent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintainceventPageRoutingModule
  ],
  declarations: [MaintainceventPage]
})
export class MaintainceventPageModule {}
