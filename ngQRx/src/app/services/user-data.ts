import { Injectable } from '@angular/core';
import { Events } from '@ionic/angular';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserData {

  HAS_LOGGED_IN = 'hasLoggedIn';
  loggedIn = false;
  userRole = ' ';
  user: User;

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

  setUser(user: User) {
    this.user = user;
  }

  getUser(): User {
    return this.user;
  }
}
