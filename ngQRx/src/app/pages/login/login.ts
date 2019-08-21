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
    private userData: UserData
  ) {}

  ngOnInit() {}

  onSignup() {
    this.router.navigateByUrl('/signup');
  }

  login() {
    console.log(this.user);
    this.auth.login(this.user.username, this.user.password).subscribe(
      next => {
        // console.log(next);
        this.userData.checkHasSeenTutorial();
        this.userData.login(this.user.username);
        console.log(
          'LoginComponent.login(): user logged in, routing to /app/tabs/medications.'
        );
        this.router.navigateByUrl('/app/tabs/medications');
      },
      error => {
        console.error(error);
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
