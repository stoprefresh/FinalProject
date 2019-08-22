import { Component } from '@angular/core';
import { ContactService } from './../../services/contact.service';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { EmergencyContact } from './../../models/emergency-contact';

@Component({
  selector: 'contacts-list-page-map',
  templateUrl: 'contacts-list.html',
  styleUrls: ['./contacts-list.scss']
})
export class ContactsListPage {

  // Fields
  contacts: EmergencyContact[] = [];
  newEmergencyContact: EmergencyContact = new EmergencyContact();
  viewNewContactForm = false;

  // Constructors
  constructor(
    public actionSheetCtrl: ActionSheetController,
    public inAppBrowser: InAppBrowser,
    public router: Router,
    private contactService: ContactService,
  ) { }

  // Methods

  reload() {
    this.contactService.index().subscribe(
      good => {
        if (good) {
          this.contacts = good;
        } else {
          // TODO fix route for error
          this.router.navigateByUrl('**');
        }
      },
      bad => {
        console.error(bad);
      },
      // TODO possible implementation for finally
      () => { }
    );
  }

  showContactForm() {
    this.viewNewContactForm = true;
  }

  ionViewDidEnter() {
    this.contactService.index().subscribe((contacts: EmergencyContact[]) => {
      this.contacts = contacts;
    });
  }

  addContact() {
    this.contactService.create(this.newEmergencyContact).subscribe(
      good => {
        // console.log(good);
        this.viewNewContactForm = false;
        this.newEmergencyContact = new EmergencyContact();
      },
      bad => {
        console.error(bad);
      },
      () => {
        this.reload();
      }
    );
  }

}
