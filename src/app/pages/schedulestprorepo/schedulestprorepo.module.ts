import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedulestprorepoPageRoutingModule } from './schedulestprorepo-routing.module';

import { SchedulestprorepoPage } from './schedulestprorepo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulestprorepoPageRoutingModule
  ],
  declarations: [SchedulestprorepoPage]
})
export class SchedulestprorepoPageModule {}
