import { Injectable } from '@angular/core';
import { Events } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserData {
  HAS_LOGGED_IN = 'hasLoggedIn';
  loggedIn = false;
  userRole = ' ';

  constructor(public events: Events) {}

  setUserRole(role: string) {
    this.userRole = role;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
  setLoggedIn() {
    this.loggedIn = true;
  }
}
