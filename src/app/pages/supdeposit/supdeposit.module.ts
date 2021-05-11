import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupdepositPageRoutingModule } from './supdeposit-routing.module';

import { SupdepositPage } from './supdeposit.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupdepositPageRoutingModule,
    ComponentsModule,
    IonicSelectableModule
  ],
  declarations: [SupdepositPage]
})
export class SupdepositPageModule {}
