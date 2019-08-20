import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicationDetailPage } from './medication-detail';
import { MedicationDetailPageRoutingModule } from './medication-detail-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MedicationDetailPageRoutingModule,
    FormsModule
  ],
  declarations: [
    MedicationDetailPage,
  ]
})
export class MedicationDetailModule { }
