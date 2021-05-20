import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentnamePageRoutingModule } from './componentname-routing.module';

import { ComponentnamePage } from './componentname.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentnamePageRoutingModule,
    IonicSelectableModule,
  ],
  declarations: [ComponentnamePage]
})
export class ComponentnamePageModule {}
