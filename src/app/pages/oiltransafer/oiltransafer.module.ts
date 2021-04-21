import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OiltransaferPageRoutingModule } from './oiltransafer-routing.module';

import { OiltransaferPage } from './oiltransafer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OiltransaferPageRoutingModule
  ],
  declarations: [OiltransaferPage]
})
export class OiltransaferPageModule {}
