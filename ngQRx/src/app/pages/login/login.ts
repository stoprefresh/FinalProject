import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { AuthoService } from '../../services/autho.service';
import { User } from '../../models/user';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage implements OnInit {
  user: User = new User();
  submitted = false;

  constructor(private auth: AuthoService, private router: Router) {}

  // Use the authService.login(username, password)
  // method in your login(form) behavior. On success,
  // use the router.navigateByUrl method to redirect to
  // your patient dashboard component.

  ngOnInit() {}


  onSignup() {
    this.router.navigateByUrl('/signup');
  }

  login() {
    this.auth.login(this.user.username, this.user.password).subscribe(
      next => {
        console.log(next);
        console.log('LoginComponent.login(): user logged in, routing to /patients/index/.');
        this.router.navigateByUrl('/app');
      },
      error => {
        console.error('LoginComponent.login(): error logging in.');
      }
    );
  }
}

  // login: UserOptions = { username: '', password: '' };
  // submitted = false;

  // constructor(
  //   public userData: UserData,
  //   public router: Router
  // ) { }

  // onLogin(form: NgForm) {
  //   this.submitted = true;

  //   if (form.valid) {
  //     this.userData.login(this.login.username);
  //     this.router.navigateByUrl('/app/tabs/schedule');
  //   }
  // }

  // onSignup() {
  //   this.router.navigateByUrl('/signup');
  // }

