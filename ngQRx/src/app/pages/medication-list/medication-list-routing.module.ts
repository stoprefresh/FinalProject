import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicationListPage } from './medication-list';

const routes: Routes = [
  {
    path: '',
    component: MedicationListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicationListPageRoutingModule {}
