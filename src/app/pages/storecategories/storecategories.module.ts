import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StorecategoriesPageRoutingModule } from './storecategories-routing.module';

import { StorecategoriesPage } from './storecategories.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StorecategoriesPageRoutingModule,
    IonicSelectableModule,
  ],
  declarations: [StorecategoriesPage]
})
export class StorecategoriesPageModule {}
