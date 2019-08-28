import { AuthoService } from './autho.service';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { Drug } from '../models/drug';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DrugService {
  private url = environment.baseUrl + 'drugs';
  drugsList: Drug[] = [];

  constructor(
    private http: HttpClient,
    private auth: AuthoService,
    private router: Router
  ) {}

  show(id: any): Observable<Drug> {
    const credentials = this.auth.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      })
    };
    if (this.auth.checkLogin()) {
      console.log(id);
      return this.http.get<Drug>(`${this.url}/id/${id}`, httpOptions).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('DrugService.index(): error retrieving');
        })
      );
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  getResults(keyword: string): Observable<Drug[]> {
    const credentials = this.auth.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      })
    };
    let observable: Observable<any>;
    if (this.auth.checkLogin()) {
        return this.http
          .get<Drug[]>(this.url + '/search/' + keyword, httpOptions)
          .pipe(
            catchError((err: any) => {
              console.log(err);
              return throwError('DrugService.index(): error retrieving list');
            })
          );
      }
      if (this.drugsList.length === 0) {
        observable = this.http.get<Drug[]>(this.url + '/', httpOptions).pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError('DrugService.index(): error retrieving list');
          })
        );
      } else {
        observable = of(this.drugsList);
      }

      return observable.pipe(
        map(result => {
          return result.filter(item => {
            return item.name.toLowerCase().startsWith(keyword.toLowerCase());
          });
        })
      );
    }
  }
