import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientdetailsPageRoutingModule } from './clientdetails-routing.module';

import { ClientdetailsPage } from './clientdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientdetailsPageRoutingModule
  ],
  declarations: [ClientdetailsPage]
})
export class ClientdetailsPageModule {}
