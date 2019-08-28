import { Component, OnInit } from '@angular/core';
import { MedicationService } from './../../services/medication.service';
import { Medication } from './../../models/medication';
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
    private router: Router,
    private route: ActivatedRoute,
    private noteService: NoteService,
    private medSvc: MedicationService
  ) {}

  // Methods
  ngOnInit(): void {
  }

  ionViewDidEnter() {
    const noteId = this.route.snapshot.paramMap.get('noteId');
    this.noteService.show(noteId).subscribe(
      good => {
        this.note = good;
      },
      bad => {
        this.router.navigateByUrl('**');
      },
      () => {
        this.editNote = this.note;
      }
    );
    this.medSvc.index().subscribe(
      good => {
        this.meds = good;
      },
      bad => {
        console.error(bad);
        this.router.navigateByUrl('**');
      }
    );

  }

  setEditNote() {
    this.editNote = Object.assign({}, this.note);
  }

  saveEdit() {
    this.noteService.update(this.editNote).subscribe(
      good => {
        this.note = this.editNote;
        this.ionViewDidEnter();
      },
      bad => {
        console.error(bad);
      },
      () => {
        this.editNote = null;
        this.router.navigateByUrl('app/tabs/notes');
      }
    );
  }

  deleteMed() {
    this.noteService.destroy(this.note.id).subscribe(
      good => {
        this.router.navigateByUrl('app/tabs/notes');
      },
      bad => {
        console.error(bad);
      },
      () => {
      }
    );
  }

  cancel () {
    this.editNote = null;
    this.router.navigateByUrl('app/tabs/notes');
  }
}
