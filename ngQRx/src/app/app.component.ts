import { User } from './models/user';
import { AuthoService } from './services/autho.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { Events, Platform, ToastController } from '@ionic/angular';

import { UserData } from './services/user-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  // Fields
  user: User;

  appPages = [
    {
      title: 'Drug Search',
      url: '/rxnav',
      icon: 'beaker'
    },
    {
      title: 'Medications',
      url: '/app/tabs/medications',
      icon: 'medical'
    },
    {
      title: 'Allergies',
      url: '/app/tabs/allergies',
      icon: 'warning'
    },
    {
      title: 'Notes',
      url: '/app/tabs/notes',
      icon: 'clipboard'
    },
    {
      title: 'Providers',
      url: '/provider-list',
      icon: 'medkit'
    },
    {
      title: 'Emergency Contacts',
      url: '/app/tabs/contacts',
      icon: 'contacts'
    },
    {
      title: 'Physical Profile',
      url: '/health-info',
      icon: 'finger-print'
    }
  ];

  // Contructors
  constructor(
    private events: Events,
    private platform: Platform,
    private router: Router,
    private userData: UserData,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController,
    private authService: AuthoService
  ) {
    this.initializeApp();
  }

  // Methods
  async ngOnInit() {
    this.checkLoginStatus();
    if (!this.checkLoginStatus()) {
      this.router.navigateByUrl('/login');
    }
    this.isUserEMS();
    this.isUserAdmin();
    this.isUserPhysician();
  }

  isUserEMS() {
    if (this.userData.userRole === 'EMS') {
      return true;
    }
    return false;
  }

  isUserAdmin() {
    if (this.userData.userRole === 'Admin') {
      return true;
    }
    return false;
  }

  isUserPhysician() {
    if (this.userData.userRole === 'Physician') {
      return true;
    }
    return false;
  }

  isUserPatient() {
    if (this.userData.userRole === 'User') {
      return true;
    }
    return false;
  }

  initializeApp() {
    this.platform.ready().then(() => {});
  }

  checkLoginStatus() {
    return this.userData.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    window.location.reload();
  }
}
