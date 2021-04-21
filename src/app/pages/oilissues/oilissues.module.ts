import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OilissuesPageRoutingModule } from './oilissues-routing.module';

import { OilissuesPage } from './oilissues.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OilissuesPageRoutingModule
  ],
  declarations: [OilissuesPage]
})
export class OilissuesPageModule {}
