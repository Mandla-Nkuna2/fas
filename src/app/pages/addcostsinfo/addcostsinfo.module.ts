import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcostsinfoPageRoutingModule } from './addcostsinfo-routing.module';

import { AddcostsinfoPage } from './addcostsinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddcostsinfoPageRoutingModule
  ],
  declarations: [AddcostsinfoPage]
})
export class AddcostsinfoPageModule {}
