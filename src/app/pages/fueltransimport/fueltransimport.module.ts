import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FueltransimportPageRoutingModule } from './fueltransimport-routing.module';

import { FueltransimportPage } from './fueltransimport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FueltransimportPageRoutingModule
  ],
  declarations: [FueltransimportPage]
})
export class FueltransimportPageModule {}
