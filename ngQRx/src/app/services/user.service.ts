import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthoService } from './autho.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private baseUrl = 'http://localhost:8090/';
  private url = environment.baseUrl + 'api/users';

  editUser = null;

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

  index(): Observable<User> {
    const credentials = this.auth.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      })
    };
    if (this.auth.checkLogin()) {
      return this.http.get<User>(`${this.url}/`, httpOptions).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('UserService.index(): error retrieving');
        })
      );
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  // index() {
  //   const credentials = this.auth.getCredentials();
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       Authorization: `Basic ${credentials}`,
  //       'X-Requested-With': 'XMLHttpRequest'
  //     })
  //   };
  //   if (this.auth.checkLogin()) {
  //     return this.http
  //       .get<User[]>(this.url + '?sorted=true', httpOptions)
  //       .pipe(
  //         catchError((err: any) => {
  //           console.log(err);
  //           return throwError(
  //             'UserService.index(): error retrieving list'
  //           );
  //         })
  //       );
  //   } else {
  //     this.router.navigateByUrl('/login');
  //   }
  // }

  create(user: User) {
      return this.http.post<User>(environment.baseUrl + 'register', user).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('UserService.create(): error creating user');
        })
      );
  }

  update(user: User) {
    console.log(user);
    const credentials = this.auth.getCredentials();
    if (this.auth.checkLogin()) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Basic ${credentials}`,
          'X-Requested-With': 'XMLHttpRequest'
        })
      };
      return this.http.put<any>(this.url + '/' + user.id, user, httpOptions);
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
