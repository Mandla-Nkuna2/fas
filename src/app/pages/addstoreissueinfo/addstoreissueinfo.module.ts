import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddstoreissueinfoPageRoutingModule } from './addstoreissueinfo-routing.module';

import { AddstoreissueinfoPage } from './addstoreissueinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddstoreissueinfoPageRoutingModule
  ],
  declarations: [AddstoreissueinfoPage]
})
export class AddstoreissueinfoPageModule {}
