import { Medication } from './../../models/medication';
import { MedicationService } from './../../services/medication.service';
import { NoteService } from './../../services/note.service';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ConferenceData } from './../../providers/conference-data';
import { Note } from './../../models/note';
import { Component, OnInit } from '@angular/core';
import { PopoverController, ActionSheetController } from '@ionic/angular';
import { Patient } from '../../models/patient';

@Component({
  selector: 'page-note-list',
  templateUrl: 'note-list.html',
  styleUrls: ['./note-list.scss'],
})
export class NoteListPage implements OnInit {
  // FIELDS
  notes: Note[] = [];
  newNote: Note = new Note();
  viewNoteForm = false;
  patient: Patient;
  meds: Medication [] = [];

  // CTOR
  constructor(
    public actionSheetCtrl: ActionSheetController,
    public confData: ConferenceData,
    public inAppBrowser: InAppBrowser,
    public router: Router,
    private noteSvc: NoteService,
    private medSvc: MedicationService
  ) {}

  // METHODS
  ngOnInit(): void {

    this.reload();
  }

  reload() {
    this.noteSvc.index().subscribe(
      good => {
        if (good) {
          this.notes = good;
        } else {
          // TODO fix route for error
          this.router.navigateByUrl('**');
        }
      },
      bad => {
        console.error(bad);
      },
      // TODO possible implementation for finally
      () => {}
    );
    this.medSvc.index().subscribe(
      good => {
        if (good) {
          this.meds = good;
        } else {
          // TODO fix route for error
          this.router.navigateByUrl('**');
        }
      },
      bad => {
        console.error(bad);
      },
      // TODO possible implementation for finally
      () => {}
    );
  }


  showNoteForm() {
    this.viewNoteForm = true;
  }

  ionViewDidEnter() {
    this.noteSvc.index().subscribe((notes: Note[]) => {
      this.notes = notes;
    });
  }

  addNote() {
    console.log('new note: ' + this.newNote);
    this.noteSvc.create(this.newNote).subscribe(
      good => {
        console.log(good);
        this.viewNoteForm = false;
        this.newNote = new Note();
      },
      bad => {
        console.error(bad);
      },
      () => {
        // this.newNote = new Note();
        this.reload();
      }
    );
  }



  // async openContact(note: Note) {
  //   const mode = 'ios'; // this.config.get('mode');

  //   const actionSheet = await this.actionSheetCtrl.create({
  //     header: 'Contact ' + note.name,
  //     buttons: [
  //       {
  //         text: `Email ( ${note.email} )`,
  //         icon: mode !== 'ios' ? 'mail' : null,
  //         handler: () => {
  //           window.open('mailto:' + note.email);
  //         }
  //       },
  //       {
  //         text: `Call ( ${medication.phone} )`,
  //         icon: mode !== 'ios' ? 'call' : null,
  //         handler: () => {
  //           window.open('tel:' + medication.phone);
  //         }
  //       }
  //     ]
  //   });

  //   await actionSheet.present();
  // }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  // conferenceDate = '2047-05-17';

  // constructor(public popoverCtrl: PopoverController) { }

  // async presentPopover(event: Event) {
  //   const popover = await this.popoverCtrl.create({
  //     component: PopoverPage,
  //     event
  //   });
  //   await popover.present();
  // }
}
