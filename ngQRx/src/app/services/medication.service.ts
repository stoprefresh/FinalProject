import { Injectable } from '@angular/core';
import { Medication } from '../models/medication';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { DatePipe } from '@angular/common';
import { AuthoService } from './autho.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class MedicationService {

  // private baseUrl = 'http://localhost:8090/';
  private url = environment.baseUrl + 'api/patients/medications';

  editMedication = null;

  constructor(
    private datePipe: DatePipe,
    private http: HttpClient,
    private auth: AuthoService,
    private router: Router
  ) {}

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
      return this.http.delete<any>(this.url, httpOptions);
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  show(id: any): Observable<Medication> {
    const credentials = this.auth.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      })
    };
    if (this.auth.checkLogin()) {
      return this.http.get<Medication>(`${this.url}/${id}`, httpOptions).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('MedicationService.index(): error retrieving');
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
      return this.http.get<Medication[]>(this.url + '?sorted=true', httpOptions).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('MedicationService.index(): error retrieving list');
        })
      );
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  create(medication: Medication) {
    const credentials = this.auth.getCredentials();
    if (this.auth.checkLogin()) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Basic ${credentials}`,
          'X-Requested-With': 'XMLHttpRequest'
        })
      };
      return this.http.post<Medication>(this.url, medication, httpOptions).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('MedicationService.create(): error creating medication');
        })
      );
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  update(medication: Medication) {
    const credentials = this.auth.getCredentials();
    if (this.auth.checkLogin()) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Basic ${credentials}`,
          'X-Requested-With': 'XMLHttpRequest'
        })
      };
      return this.http.put<any>(this.url + '/' + medication.id, medication, httpOptions);
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
