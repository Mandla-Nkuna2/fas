import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OiltypePageRoutingModule } from './oiltype-routing.module';

import { OiltypePage } from './oiltype.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OiltypePageRoutingModule,
    IonicSelectableModule,
  ],
  declarations: [OiltypePage]
})
export class OiltypePageModule {}
