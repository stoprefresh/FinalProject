import { EmergencyContact } from './../../models/emergency-contact';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'edit-contact',
  templateUrl: './edit-contact.page.html',
  styleUrls: ['./edit-contact.page.scss'],
})

export class EditContactPage implements OnInit {
  // Fields
  contact: EmergencyContact = null;
  editEmergencyContact: EmergencyContact = null;

  // Constructors
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {}

  // Methods
  ngOnInit(): void {}

  ionViewWillEnter() {
    const contactId = this.route.snapshot.paramMap.get('contactId');
    this.contactService.show(contactId).subscribe(
      good => {
        this.contact = good;
      },
      bad => {
        console.log('Life is Bad');
        this.router.navigateByUrl('**');
      }
    );
  }

  setEditEmergencyContact() {
    this.editEmergencyContact = Object.assign({}, this.contact);
  }

  saveEdit() {
    this.contactService.update(this.editEmergencyContact).subscribe(
      good => {
        this.contact = this.editEmergencyContact;
        this.ionViewWillEnter();
      },
      bad => {
        console.error(bad);
      },
      () => {
        this.editEmergencyContact = null;
      }
    );
  }

  deleteEmergencyContact() {
    this.contactService.destroy(this.contact.id).subscribe(
      good => {
        this.router.navigateByUrl('app/tabs/contacts');
        this.ionViewWillEnter();
      },
      bad => {
        console.error(bad);
      },
      () => {
      }
    );
  }

}
