import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { AuthoService } from './autho.service';
import { DatePipe } from '@angular/common';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Allergy } from '../models/allergy';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AllergyService {

  private url = environment.baseUrl + 'api/patients/allergies';

  editAllerby = null;

  // Constructor
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
        return this.http.delete<any>(`${this.url}/${id}`, httpOptions);
      } else {
        this.router.navigateByUrl('/login');
      }
    }

    show(id: any): Observable<Allergy> {
      const credentials = this.auth.getCredentials();
      const httpOptions = {
        headers: new HttpHeaders({
          Authorization: `Basic ${credentials}`,
          'X-Requested-With': 'XMLHttpRequest'
        })
      };
      if (this.auth.checkLogin()) {
        return this.http.get<Allergy>(`${this.url}/${id}`, httpOptions).pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError('AllergyService.index(): error retrieving');
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
        return this.http.get<Allergy[]>(this.url + '/', httpOptions).pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError('AllergyService.index(): error retrieving list');
          })
        );
      } else {
        this.router.navigateByUrl('/login');
      }
    }

    create(allergy: Allergy) {
      const credentials = this.auth.getCredentials();
      if (this.auth.checkLogin()) {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Basic ${credentials}`,
            'X-Requested-With': 'XMLHttpRequest'
          })
        };
        return this.http.post<Allergy>(this.url, allergy, httpOptions).pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError('AllergyService.create(): error creating allergy');
          })
        );
      } else {
        this.router.navigateByUrl('/login');
      }
    }

    update(allergy: Allergy) {
      const credentials = this.auth.getCredentials();
      if (this.auth.checkLogin()) {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Basic ${credentials}`,
            'X-Requested-With': 'XMLHttpRequest'
          })
        };
        return this.http.put<any>(this.url + '/' + allergy.id, allergy, httpOptions);
      } else {
        this.router.navigateByUrl('/login');
      }

  }
}
