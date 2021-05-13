import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemmakemodelPageRoutingModule } from './itemmakemodel-routing.module';

import { ItemmakemodelPage } from './itemmakemodel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemmakemodelPageRoutingModule
  ],
  declarations: [ItemmakemodelPage]
})
export class ItemmakemodelPageModule {}
