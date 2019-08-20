import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NoteListPage } from './note-list';
import { PopoverPage } from '../note-popover/note-popover';
import { NoteListRoutingModule } from './note-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteListRoutingModule
  ],
  declarations: [NoteListPage, PopoverPage],
  entryComponents: [PopoverPage],
  bootstrap: [NoteListPage],
})
export class NoteListModule {}
