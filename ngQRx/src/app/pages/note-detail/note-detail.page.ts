import { MedicationService } from './../../services/medication.service';
import { Medication } from './../../models/medication';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../../models/note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'page-note-detail',
  templateUrl: 'note-detail.page.html',
  styleUrls: ['./note-detail.page.scss']
})
export class NoteDetailPage implements OnInit {
  // Fields
  note: Note = null;
  editNote: Note = null;
  meds: Medication [] = [];

  // Constructors
  constructor(
    private dataProvider: ConferenceData,
    private router: Router,
    private route: ActivatedRoute,
    private noteService: NoteService,
    private medSvc: MedicationService
  ) {}

  // Methods
  ngOnInit(): void {}

  ionViewWillEnter() {
    const noteId = this.route.snapshot.paramMap.get('noteId');
    console.log(`ID is ${noteId}   ********************`);
    this.noteService.show(noteId).subscribe(
      good => {
        console.log('Life is Good');
        console.log(good);
        this.note = good;
      },
      bad => {
        console.log('Life is Bad');
        console.error(bad);
        this.router.navigateByUrl('**');
      }
    );
    this.medSvc.index().subscribe(
      good => {
        console.log('Life is Good');
        console.log(good);
        this.meds = good;
      },
      bad => {
        console.log('Life is Bad');
        console.error(bad);
        this.router.navigateByUrl('**');
      }
    );
  }

  setEditNote() {
    this.editNote = Object.assign({}, this.note);
  }

  saveEdit() {
    console.log(this.editNote);
    this.noteService.update(this.editNote).subscribe(
      good => {
        console.log(good);
        this.note = this.editNote;
        window.location.reload();
      },
      bad => {
        console.error(bad);
      },
      () => {
        this.editNote = null;
      }
    );
  }

  deleteMed() {
    this.noteService.destroy(this.note.id).subscribe(
      good => {
        console.log('Delete successful');
        console.log(good);
        this.router.navigateByUrl('app/tabs/notes');
      },
      bad => {
        console.error(bad);

      },
      () => {
      }
    );
  }

}
