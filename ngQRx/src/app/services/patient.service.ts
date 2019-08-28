import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Patient } from '../models/patient';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthoService } from './autho.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private url = environment.baseUrl + 'api/patients';

  editPatient = null;

  constructor(
    private datePipe: DatePipe,
    private http: HttpClient,
    private auth: AuthoService,
    private router: Router
  ) {}
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

  show(id: any): Observable<Patient> {
    const credentials = this.auth.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      })
    };
    if (this.auth.checkLogin()) {
      return this.http.get<Patient>(`${this.url}/${id}`, httpOptions).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('PatientService.index(): error retrieving');
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
      return this.http
        .get<Patient>(this.url, httpOptions)
        .pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError(
              'PatientService.index(): error retrieving patient'
            );
          })
        );
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  create(patient: Patient) {
    const credentials = this.auth.getCredentials();
    if (this.auth.checkLogin()) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Basic ${credentials}`,
          'X-Requested-With': 'XMLHttpRequest'
        })
      };
      return this.http.post<Patient>(this.url, patient, httpOptions).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError(
            'PatientService.create(): error creating patient'
          );
        })
      );
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  update(patient: Patient) {
    const credentials = this.auth.getCredentials();
    if (this.auth.checkLogin()) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Basic ${credentials}`,
          'X-Requested-With': 'XMLHttpRequest'
        })
      };
      return this.http.put<any>(
        this.url + '/' + patient.id,
        patient,
        httpOptions
      );
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  findByUserName(username: any): Observable<Patient> {
    const credentials = this.auth.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      })
    };
    if (this.auth.checkLogin()) {
      return this.http.get<Patient>(`${this.url}/username/${username}`, httpOptions).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('PatientService.index(): error retrieving');
        })
      );
    } else {
      this.router.navigateByUrl('/login');
    }
  }

}
