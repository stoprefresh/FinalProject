import { User } from './../../models/user';
import { UserData } from './../../services/user-data';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {

  // Fields
  user: User = null;
  userQR: String = null;

  // Constructor
  constructor(
    public router: Router,
    public userSvc: UserService
  ) {
   }


  // Methods
  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getUser();

  }

  getQR() {
    this.userQR = `https://api.qrserver.com/v1/create-qr-code/?data=${this.user.username}&amp;size=300x300`;
  }

  getUser() {
    this.userSvc.index().subscribe(
      good => {
        if (good) {
          this.user = good;
          console.log(this.user.username);
        }
      },
      bad => {
        console.error(bad);
      },
      // TODO possible implementation for finally
      () => {}
    );
  }

}
