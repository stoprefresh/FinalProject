import { MedicationService } from './../../services/medication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { Medication } from '../../models/medication';
import { AuthoService } from '../../services/autho.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-medication-list',
  templateUrl: 'medication-list.html',
  styleUrls: ['./medication-list.scss'],
})
export class MedicationListPage implements OnInit {

  // Fields
  medications: Medication[] = [];
  selected: Medication = null;
  editMedication: Medication = null;
  newMedication: Medication = new Medication();
  showInactive = false;

  // Constructors
  constructor(
    public actionSheetCtrl: ActionSheetController,
    public confData: ConferenceData,
    public inAppBrowser: InAppBrowser,
    public router: Router,
    private medicationService: MedicationService,
    private currentRoute: ActivatedRoute,
    private http: HttpClient,
    private auth: AuthoService
  ) {}

  // Methods
  ngOnInit(): void {

    this.reload();
  }

  reload() {
    this.medicationService.index().subscribe(
      good => {
        if (good) {
          this.medications = good;
        } else {
          // TODO fix route for error
          this.router.navigateByUrl('**');
        }
      },
      bad => {
        console.error(bad);
      },
      // TODO possible implementation for finally
      () => {}
    );
  }

  ionViewDidEnter() {
    this.medicationService.index().subscribe((medications: Medication[]) => {
      this.medications = medications;
    });
  }

  goTomedicationTwitter(medication: Medication) {
    this.inAppBrowser.create(
      `https://twitter.com/`,
      '_blank'
    );
  }

  async openmedicationShare(medication: Medication) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Share ' + medication.medName,
      buttons: [
        {
          text: 'Copy Link',
          handler: () => {
            console.log(
              'Copy link clicked on https://twitter.com/'
              // + medication.twitter
            );
            if (
              (window as any)['cordova'] &&
              (window as any)['cordova'].plugins.clipboard
            ) {
              (window as any)['cordova'].plugins.clipboard.copy(
                'https://twitter.com/'
                // + medication.twitter
              );
            }
          }
        },
        {
          text: 'Share via ...'
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }

  async openContact(medication: any) {
    const mode = 'ios'; // this.config.get('mode');

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Contact ' + medication.name,
      buttons: [
        {
          text: `Email ( ${medication.email} )`,
          icon: mode !== 'ios' ? 'mail' : null,
          handler: () => {
            window.open('mailto:' + medication.email);
          }
        },
        {
          text: `Call ( ${medication.phone} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + medication.phone);
          }
        }
      ]
    });

    await actionSheet.present();
  }
}
