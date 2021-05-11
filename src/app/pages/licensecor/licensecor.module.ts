import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LicensecorPageRoutingModule } from './licensecor-routing.module';

import { LicensecorPage } from './licensecor.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LicensecorPageRoutingModule,
    ComponentsModule,
    IonicSelectableModule
  ],
  declarations: [LicensecorPage]
})
export class LicensecorPageModule {}
