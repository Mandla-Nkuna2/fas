import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuelbrowsenoilctrlPageRoutingModule } from './fuelbrowsenoilctrl-routing.module';

import { FuelbrowsenoilctrlPage } from './fuelbrowsenoilctrl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuelbrowsenoilctrlPageRoutingModule
  ],
  declarations: [FuelbrowsenoilctrlPage]
})
export class FuelbrowsenoilctrlPageModule {}
