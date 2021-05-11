import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddassetsPageRoutingModule } from './addassets-routing.module';

import { IonicSelectableModule } from 'ionic-selectable';
import { AddassetsPage } from './addassets.page';
import { ClickOutsideModule } from 'ng-click-outside';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddassetsPageRoutingModule,
    ClickOutsideModule,
    ComponentsModule,
    IonicSelectableModule,
  ],
  declarations: [AddassetsPage]
})
export class AddassetsPageModule {}
