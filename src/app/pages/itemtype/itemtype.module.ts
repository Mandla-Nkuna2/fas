import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemtypePageRoutingModule } from './itemtype-routing.module';

import { ItemtypePage } from './itemtype.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemtypePageRoutingModule,
    IonicSelectableModule,
  ],
  declarations: [ItemtypePage]
})
export class ItemtypePageModule {}
