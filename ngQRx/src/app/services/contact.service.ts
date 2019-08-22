import { EmergencyContact } from './../models/emergency-contact';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthoService } from './autho.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private url = environment.baseUrl + 'api/patients/contacts';

  editContact = null;

  constructor(
    private http: HttpClient,
    private auth: AuthoService,
    private router: Router
  ) { }

  destroy(id: string | number) {
    const credentials = this.auth.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      })
    };
    if (this.auth.checkLogin()) {
      return this.http.delete<any>(`${this.url}/${id}`, httpOptions);
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  show(id: any): Observable<EmergencyContact> {
    const credentials = this.auth.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      })
    };
    if (this.auth.checkLogin()) {
      return this.http.get<EmergencyContact>(`${this.url}/${id}`, httpOptions).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('EmergencyContactService.index(): error retrieving');
        })
      );
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  index() {
    const credentials = this.auth.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      })
    };
    if (this.auth.checkLogin()) {
      return this.http.get<EmergencyContact[]>(this.url, httpOptions).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('EmergencyContactService.index(): error retrieving list');
        })
      );
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  create(contact: EmergencyContact) {
    const credentials = this.auth.getCredentials();
    if (this.auth.checkLogin()) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Basic ${credentials}`,
          'X-Requested-With': 'XMLHttpRequest'
        })
      };
      return this.http.post<EmergencyContact>(this.url, contact, httpOptions).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('EmergencyContactService.create(): error creating contact');
        })
      );
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  update(contact: EmergencyContact) {
    const credentials = this.auth.getCredentials();
    if (this.auth.checkLogin()) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Basic ${credentials}`,
          'X-Requested-With': 'XMLHttpRequest'
        })
      };
      return this.http.put<any>(this.url + '/' + contact.id, contact, httpOptions);
    } else {
      this.router.navigateByUrl('/login');
    }

}

}
