import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddissuesinfoPageRoutingModule } from './addissuesinfo-routing.module';

import { AddissuesinfoPage } from './addissuesinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddissuesinfoPageRoutingModule
  ],
  declarations: [AddissuesinfoPage]
})
export class AddissuesinfoPageModule {}
