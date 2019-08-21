import { UserService } from './../../services/user.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from '../../services/user-data';
import { User } from '../../models/user';
import { AuthoService } from '../../services/autho.service';



@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
  user: User = new User();
  submitted = false;

  constructor(
    public router: Router,
    public userData: UserData,
    private auth: AuthoService,
    private userSvc: UserService
  ) {}

  addUser() {
    this.userSvc.create(this.user).subscribe(
      good => {
        console.log(good);
        console.log('SignupComponent.addUser(): IN GOOD.');
        this.submitted = true;
        this.auth.login(this.user.username, this.user.password).subscribe(
          next => {
            this.userData.checkHasSeenTutorial();
            this.userData.login(this.user.username);
            console.log(
              'SignupComponent.addUser(): user logged in, routing to /account'
            );
            this.router.navigateByUrl('/account');
          },
          error => {
            console.error('SignupComponent.addUser(): error creating user.');
          }
        );
      },
      bad => {
        console.error('SignupComponent.addUser(): error creating user.');
        console.error(bad);
      },
      () => {
      }
    );
  }

}
