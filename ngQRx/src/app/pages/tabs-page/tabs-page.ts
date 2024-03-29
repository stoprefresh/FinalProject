import { UserData } from './../../services/user-data';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
loggedIn = false;
constructor(private userData: UserData) {
  this.checkLoginStatus();
}

checkLoginStatus() {
  return this.updateLoggedInStatus(this.userData.isLoggedIn());
}
  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
    }, 300);
  }
}



