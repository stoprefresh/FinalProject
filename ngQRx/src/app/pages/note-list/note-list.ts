import { Component, ViewEncapsulation } from '@angular/core';

import { PopoverController } from '@ionic/angular';

import { PopoverPage } from '../note-popover/note-popover';

@Component({
  selector: 'page-note-list',
  templateUrl: 'note-list.html',
  styleUrls: ['./note-list.scss'],
})
export class NoteListPage {
  conferenceDate = '2047-05-17';

  constructor(public popoverCtrl: PopoverController) { }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }
}
