import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OiltransaferPageRoutingModule } from './oiltransafer-routing.module';

import { OiltransaferPage } from './oiltransafer.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OiltransaferPageRoutingModule,
    ComponentsModule,
    IonicSelectableModule,
  ],
  declarations: [OiltransaferPage]
})
export class OiltransaferPageModule {}
