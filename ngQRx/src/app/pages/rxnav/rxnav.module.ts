import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RxnavPage } from './rxnav.page';

const routes: Routes = [
  {
    path: '',
    component: RxnavPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  // declarations: [RxnavPage],
  entryComponents: [
    RxnavPage
  ]
})
export class RxnavPageModule {}
