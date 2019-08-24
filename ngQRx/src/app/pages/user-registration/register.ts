import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { UserData } from '../../services/user-data';
import { User } from '../../models/user';
import { AuthoService } from '../../services/autho.service';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  styleUrls: ['./register.scss']
})
export class RegisterPage {
  user: User = new User();
  provider = false;

  constructor(
    public router: Router,
    public userData: UserData,
    private auth: AuthoService,
    private userSvc: UserService
  ) {}

  addUser() {
    this.userSvc.create(this.user).subscribe(
      good => {
        this.auth.login(this.user.username, this.user.password).subscribe(
          next => {
            this.userData.setLoggedIn();
            if (this.provider) {
              this.router.navigateByUrl('/provider-registration');
            } else {
              this.router.navigateByUrl('/patient-registration');
            }
          },
          error => {
            console.error('RegisterComponent.addUser(): error creating user.');
          }
        );
      },
      bad => {
        console.error('RegisterComponent.addUser(): error creating user.');
        console.error(bad);
      },
      () => {}
    );
  }
}
