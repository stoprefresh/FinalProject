import { AccountModule } from './pages/edit-user/account.module';
import { User } from './models/user';
import { UserService } from './services/user.service';
import { AuthoService } from './services/autho.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { Events, MenuController, Platform, ToastController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Storage } from '@ionic/storage';

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
  isEMS = false;


  appPages = [
    {
      title: 'Emergency Contacts',
      url: '/app/tabs/contacts',
      icon: 'calendar'
    },
    {
      title: 'Medications',
      url: '/app/tabs/medications',
      icon: 'contacts'
    },
    {
      title: 'Allergies',
      url: '/app/tabs/allergies',
      icon: 'map'
    },
    {
      title: 'Notes',
      url: '/app/tabs/notes',
      icon: 'information-circle'
    }
  ];
  loggedIn = false;

  // Contructors
  constructor(
    private events: Events,
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private userData: UserData,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController,
    private authService: AuthoService,
    private userSvc: UserService

  ) {
    this.initializeApp();
  }


  // Methods
  async ngOnInit() {
    this.checkLoginStatus();
    this.listenForLoginEvents();

    this.isUserEMS();


    this.swUpdate.available.subscribe(async res => {
      const toast = await this.toastCtrl.create({
        message: 'Update available!',
        showCloseButton: true,
        position: 'bottom',
        closeButtonText: `Reload`
      });

      await toast.present();

      toast
        .onDidDismiss()
        .then(() => this.swUpdate.activateUpdate())
        .then(() => window.location.reload());
    });
  }


  isUserEMS() {
    if (this.userData.userRole === 'ems') {
        this.isEMS = true;
        return true;
    }
    return false;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  checkLoginStatus() {
    return this.userData.isLoggedIn().then(loggedIn => {
      return this.updateLoggedInStatus(loggedIn);
    });
  }

  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
    }, 300);
  }

  listenForLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.updateLoggedInStatus(true);
    });

    this.events.subscribe('user:register', () => {
      this.updateLoggedInStatus(true);
    });

    this.events.subscribe('user:logout', () => {
      this.updateLoggedInStatus(false);
    });
  }

  logout() {
    this.authService.logout();
    this.userData.logout().then(() => {
      return this.router.navigateByUrl('/login');
    });
    this.user = null;
    this.isEMS = false;
  }

}
