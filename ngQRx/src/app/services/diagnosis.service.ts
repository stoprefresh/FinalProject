import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Diagnosis } from '../models/diagnosis';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthoService } from './autho.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisService {

  private url = environment.baseUrl + 'api/patients/diagnosis';

  editContact = null;

  constructor(
    private http: HttpClient,
    private auth: AuthoService,
    private router: Router
  ) { }

  index() {
    const credentials = this.auth.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      })
    };
    if (this.auth.checkLogin()) {
      return this.http.get<Diagnosis[]>(this.url, httpOptions).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('DiagnosisService.index(): error retrieving list');
        })
      );
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
