import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemmakemodelPageRoutingModule } from './itemmakemodel-routing.module';

import { ItemmakemodelPage } from './itemmakemodel.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemmakemodelPageRoutingModule,
    IonicSelectableModule,
  ],
  declarations: [ItemmakemodelPage]
})
export class ItemmakemodelPageModule {}
