import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllergyListPage } from './allergy-list';

const routes: Routes = [
  {
    path: '',
    component: AllergyListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllergyListPageRoutingModule { }
