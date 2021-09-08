import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdditeminfoPageRoutingModule } from './additeminfo-routing.module';

import { AdditeminfoPage } from './additeminfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdditeminfoPageRoutingModule
  ],
  declarations: [AdditeminfoPage]
})
export class AdditeminfoPageModule {}
