import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentnamePageRoutingModule } from './componentname-routing.module';

import { ComponentnamePage } from './componentname.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentnamePageRoutingModule
  ],
  declarations: [ComponentnamePage]
})
export class ComponentnamePageModule {}
