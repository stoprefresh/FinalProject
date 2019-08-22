import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { AuthoService } from '../../services/autho.service';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

import { UserData } from '../../services/user-data';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss']
})
export class AccountPage implements AfterViewInit {
  user: User;

  constructor(
    public alertCtrl: AlertController,
    public router: Router,
    public userData: UserData,
    private userSvc: UserService,
    private authSvc: AuthoService
  ) {}

  ngAfterViewInit() {
    this.getUser();
  }

  ionViewDidEnter() {
    this.getUser();
  }
  updateUser() {
    this.userSvc.update(this.user).subscribe(
      good => {
        this.user = good;
      },
      bad => {
        console.error(bad);
      },
      () => {}
    );
  }
  getUser() {
    this.userSvc.index().subscribe(
      good => {
        if (good) {
          this.user = good;
        } else {
          // TODO fix route for error
          this.router.navigateByUrl('**');
        }
      },
      bad => {
        console.error(bad);
      },
      // TODO possible implementation for finally
      () => {}
    );
  }

  changePassword() {}

  logout() {
    this.userData.logout();
    this.authSvc.logout();
    this.router.navigateByUrl('/login');
  }
}
