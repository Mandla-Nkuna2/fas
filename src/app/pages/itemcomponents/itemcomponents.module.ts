import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemcomponentsPageRoutingModule } from './itemcomponents-routing.module';

import { ItemcomponentsPage } from './itemcomponents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemcomponentsPageRoutingModule
  ],
  declarations: [ItemcomponentsPage]
})
export class ItemcomponentsPageModule {}
