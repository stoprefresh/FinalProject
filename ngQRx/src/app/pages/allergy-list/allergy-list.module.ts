import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AllergyListPage } from './allergy-list';
import { AllergyListPageRoutingModule } from './allergy-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AllergyListPageRoutingModule,
    FormsModule
  ],
  declarations: [
    AllergyListPage,
  ]
})
export class AllergyListModule { }
