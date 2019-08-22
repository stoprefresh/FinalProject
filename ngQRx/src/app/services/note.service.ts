import { AuthoService } from './autho.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DatePipe } from '@angular/common';

import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { Note } from '../models/note';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class NoteService {
private url = environment.baseUrl + 'api/patients/notes/';
editNote = null;

  constructor(
    private datePipe: DatePipe,
    private http: HttpClient,
    private auth: AuthoService,
    private router: Router
  ) {}

  // shows one note
  show(id: any): Observable<Note> {
    const credentials = this.auth.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      })
    };
    if (this.auth.checkLogin()) {
      return this.http.get<Note>(`${this.url}${id}`, httpOptions).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('NoteService.show(): error retrieving');
        })
      );
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  // shows all notes for pt
  index() {
    const credentials = this.auth.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      })
    };
    if (this.auth.checkLogin()) {
      return this.http.get<Note[]>(this.url, httpOptions).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('NoteService.index(): error retrieving list');
        })
      );
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  destroy(id: string | number) {
    console.log(id);
    const credentials = this.auth.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      })
    };
    if (this.auth.checkLogin()) {
      return this.http.delete<Note>(`${this.url}${id}`, httpOptions);
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  create(note: Note) {
    const credentials = this.auth.getCredentials();
    if (this.auth.checkLogin()) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Basic ${credentials}`,
          'X-Requested-With': 'XMLHttpRequest'
        })
      };
      return this.http.post<Note>(this.url, note, httpOptions).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('NoteService.create(): error creating note');
        })
      );
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  update(note: Note) {
    const credentials = this.auth.getCredentials();
    if (this.auth.checkLogin()) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Basic ${credentials}`,
          'X-Requested-With': 'XMLHttpRequest'
        })
      };
      return this.http.put<any>(this.url + note.id, note, httpOptions);
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
