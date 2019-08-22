import { EmergencyContact } from './../../models/emergency-contact';
import { ContactService } from './../../services/contact.service';
import { AuthoService } from './../../services/autho.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Platform, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'contacts-list-page-map',
  templateUrl: 'contacts-list.html',
  styleUrls: ['./contacts-list.scss']
})
export class ContactsListPage {

  // Fields
  contacts: EmergencyContact[] = [];
  newContact: EmergencyContact = new EmergencyContact();

  viewContactForm = false;

  // Constructors
  constructor(
    public actionSheetCtrl: ActionSheetController,
    public confData: ConferenceData,
    public inAppBrowser: InAppBrowser,
    public router: Router,
    private allergyService: ContactService,
    private currentRoute: ActivatedRoute,
    private http: HttpClient,
    private auth: AuthoService
  ) { }
}
