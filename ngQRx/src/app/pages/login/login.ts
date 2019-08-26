import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../../services/user-data';
import { AuthoService } from '../../services/autho.service';
import { User } from '../../models/user';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss']
})
export class LoginPage implements OnInit {
  user: User = new User();
  submitted = false;

  constructor(
    private auth: AuthoService,
    private router: Router,
    private userData: UserData,
    private userService: UserService
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.user = new User();
  }

  onRegister() {
    this.router.navigateByUrl('/register');
  }

  login() {
    this.auth.login(this.user.username, this.user.password).subscribe(
      next => {
        this.userData.setLoggedIn();
      },
      error => {
        console.error(error);
        console.error('LoginComponent.login(): error logging in.');
      },
      () => {
        this.userService.index().subscribe(
          good => {
            this.user = good;
            this.userData.setUser(good);
            this.userData.setUserRole(this.userData.user.role);
            if (!this.user.role) {
              this.router.navigateByUrl('/patient-registration');
            }
            if (this.user.role.toLowerCase() === 'ems') {
              this.router.navigateByUrl('/emt-view');
            }
            if (this.user.role.toLowerCase() === 'user') {
              this.router.navigateByUrl('/app/tabs/medications');
            }
            if (this.user.role.toLowerCase() === 'physician') {
              this.router.navigateByUrl('/patient-list');
            }
            if (this.user.role.toLowerCase() === 'admin') {
              this.router.navigateByUrl('/admin-dashboard');
            }
          },
          error => {
            console.error(error);
            console.error('LoginComponent.login(): error logging in.');
          }
        );
      }
    );
  }
}
