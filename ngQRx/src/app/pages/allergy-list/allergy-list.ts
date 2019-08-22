import { AuthoService } from './../../services/autho.service';
import { HttpClient } from '@angular/common/http';
import { AllergyService } from './../../services/allergy.service';
import { Router, ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { Allergy } from './../../models/allergy';
import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';

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
    public confData: ConferenceData,
    public inAppBrowser: InAppBrowser,
    public router: Router,
    private allergyService: AllergyService,
    private currentRoute: ActivatedRoute,
    private http: HttpClient,
    private auth: AuthoService
  ) { }

  // Methods
  ngOnInit(): void {

    this.reload();
  }

  reload() {
    this.allergyService.index().subscribe(
      good => {
        if (good) {
          this.allergies = good;
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
        console.log(good);
        this.viewAllergyForm = true;
        this.newAllergy = new Allergy();
      },
      bad => {
        console.error(bad);
      },
      () => {
        // this.newAllergy = new Allergy();
        this.reload();
      }
    );
  }



  async openContact(allergy: any) {
    const mode = 'ios'; // this.config.get('mode');

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Contact ' + allergy.name,
      buttons: [
        {
          text: `Email ( ${allergy.email} )`,
          icon: mode !== 'ios' ? 'mail' : null,
          handler: () => {
            window.open('mailto:' + allergy.email);
          }
        },
        {
          text: `Call ( ${allergy.phone} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + allergy.phone);
          }
        }
      ]
    });

    await actionSheet.present();
  }

}
