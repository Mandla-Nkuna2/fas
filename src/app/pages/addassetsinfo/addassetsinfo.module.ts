import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddassetsinfoPageRoutingModule } from './addassetsinfo-routing.module';

import { IonicSelectableModule } from 'ionic-selectable';
import { AddassetsinfoPage } from './addassetsinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddassetsinfoPageRoutingModule,
    IonicSelectableModule,
  ],
  declarations: [AddassetsinfoPage],
})
export class AddassetsinfoPageModule {}
