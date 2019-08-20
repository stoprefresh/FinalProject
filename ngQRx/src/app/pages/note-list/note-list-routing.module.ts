import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoteListPage } from './note-list';

const routes: Routes = [
  {
    path: '',
    component: NoteListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoteListRoutingModule { }
