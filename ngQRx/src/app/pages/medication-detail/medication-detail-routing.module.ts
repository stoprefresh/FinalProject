import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicationDetailPage } from './medication-detail';


const routes: Routes = [
  {
    path: '',
    component: MedicationDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicationDetailPageRoutingModule { }
