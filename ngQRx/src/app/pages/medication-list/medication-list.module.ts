import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MedicationListPage } from './medication-list';
import { MedicationListPageRoutingModule } from './medication-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MedicationListPageRoutingModule
  ],
  declarations: [MedicationListPage],
})
export class MedicationListModule {}
