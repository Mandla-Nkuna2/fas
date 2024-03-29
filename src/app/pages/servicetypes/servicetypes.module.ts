import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicetypesPageRoutingModule } from './servicetypes-routing.module';

import { ServicetypesPage } from './servicetypes.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicetypesPageRoutingModule,
    IonicSelectableModule,
  ],
  declarations: [ServicetypesPage]
})
export class ServicetypesPageModule {}
