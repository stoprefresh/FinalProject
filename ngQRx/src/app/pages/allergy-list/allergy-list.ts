import { AllergyService } from './../../services/allergy.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { Allergy } from './../../models/allergy';

@Component({
  selector: 'page-allergy-list',
  templateUrl: 'allergy-list.html',
  styleUrls: ['./allergy-list.scss']
})
export class AllergyListPage {

  // Fields
  allergies: Allergy[] = [];
  newAllergy: Allergy = new Allergy();
  showInactive = false;
  viewAllergyForm = false;

  // Constructors
  constructor(
    public actionSheetCtrl: ActionSheetController,
    public inAppBrowser: InAppBrowser,
    public router: Router,
    private allergyService: AllergyService,
  ) { }

  // Methods

  reload() {
    this.allergyService.index().subscribe(
      good => {
          this.allergies = good;
      },
      bad => {
        console.error(bad);
      }
    );
  }

  showAllergyForm() {
    this.viewAllergyForm = true;
  }

  ionViewDidEnter() {
    this.allergyService.index().subscribe((allergies: Allergy[]) => {
      this.allergies = allergies;
    });
  }

  addAllergy() {
    this.allergyService.create(this.newAllergy).subscribe(
      good => {
        this.viewAllergyForm = false;
        this.newAllergy = new Allergy();
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
