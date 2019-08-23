import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmergencyContact } from '../../models/emergency-contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'edit-contact',
  templateUrl: './edit-contact.page.html',
  styleUrls: ['./edit-contact.page.scss'],
})

export class EditContactPage implements OnInit {
  // Fields
  allergy: EmergencyContact = null;
  editcontact: EmergencyContact = null;

  // Constructors
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private allergyService: ContactService
  ) {}

  // Methods
  ngOnInit(): void {}

  ionViewWillEnter() {
    const allergyId = this.route.snapshot.paramMap.get('allergyId');
    // console.log(`ID is ${allergyId}   ********************`);
    this.allergyService.show(allergyId).subscribe(
      good => {
        // console.log('Life is Good');
        // console.log(good);
        this.allergy = good;
      },
      bad => {
        console.log('Life is Bad');
        console.error(bad);
        this.router.navigateByUrl('**');
      }
    );
  }

  setEditEmergencyContact() {
    this.editEmergencyContact = Object.assign({}, this.allergy);
  }

  saveEdit() {
    console.log(this.editEmergencyContact);
    this.allergyService.update(this.editEmergencyContact).subscribe(
      good => {
        // console.log(good);
        this.allergy = this.editEmergencyContact;
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
    this.allergyService.destroy(this.allergy.id).subscribe(
      good => {
        // console.log('Delete successful');
        // console.log(good);
        this.router.navigateByUrl('app/tabs/allergies');
      },
      bad => {
        console.error(bad);
      },
      () => {
      }
    );
  }

}
