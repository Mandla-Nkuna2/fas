import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutocardetailsPageRoutingModule } from './autocardetails-routing.module';

import { AutocardetailsPage } from './autocardetails.page';

import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutocardetailsPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [AutocardetailsPage]
})
export class AutocardetailsPageModule {}
