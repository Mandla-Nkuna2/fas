import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemcomponentsPageRoutingModule } from './itemcomponents-routing.module';

import { ItemcomponentsPage } from './itemcomponents.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemcomponentsPageRoutingModule,
    ComponentsModule,
    IonicSelectableModule,
  ],
  declarations: [ItemcomponentsPage]
})
export class ItemcomponentsPageModule {}
