import { Medication } from './../../models/medication';
import { MedicationService } from './../../services/medication.service';
import { NoteService } from './../../services/note.service';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Note } from './../../models/note';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Patient } from '../../models/patient';

@Component({
  selector: 'page-note-list',
  templateUrl: 'note-list.html',
  styleUrls: ['./note-list.scss']
})
export class NoteListPage implements OnInit {
  // FIELDS
  notes: Note[] = [];
  newNote: Note = new Note();
  viewNoteForm = false;
  patient: Patient;
  meds: Medication[] = [];

  // CTOR
  constructor(
    public actionSheetCtrl: ActionSheetController,
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
        this.notes = good;
      },
      bad => {
        console.error(bad);
      }
    );
    this.medSvc.index().subscribe(
      good => {
        this.meds = good;
      },
      bad => {
        console.error(bad);
      }
    );
  }

  showNoteForm() {
    this.viewNoteForm = true;
  }

  ionViewDidEnter() {
    this.reload();
  }

  addNote() {
    this.noteSvc.create(this.newNote).subscribe(
      good => {
        this.viewNoteForm = false;
        this.newNote = new Note();
      },
      bad => {
        console.error(bad);
      },
      () => {
        this.reload();
      }
    );
  }
}
