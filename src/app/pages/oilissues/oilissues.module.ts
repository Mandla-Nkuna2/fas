import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OilissuesPageRoutingModule } from './oilissues-routing.module';

import { OilissuesPage } from './oilissues.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OilissuesPageRoutingModule,
    ComponentsModule,
    IonicSelectableModule,
  ],
  declarations: [OilissuesPage]
})
export class OilissuesPageModule {}
