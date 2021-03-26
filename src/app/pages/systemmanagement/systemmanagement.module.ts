import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SystemmanagementPageRoutingModule } from './systemmanagement-routing.module';

import { SystemmanagementPage } from './systemmanagement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SystemmanagementPageRoutingModule
  ],
  declarations: [SystemmanagementPage]
})
export class SystemmanagementPageModule {}
