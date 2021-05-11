import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdditionalcostsPageRoutingModule } from './additionalcosts-routing.module';

import { AdditionalcostsPage } from './additionalcosts.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdditionalcostsPageRoutingModule,
    ComponentsModule,
    IonicSelectableModule,
  ],
  declarations: [AdditionalcostsPage]
})
export class AdditionalcostsPageModule {}
