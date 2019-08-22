import { MedicationService } from './../../services/medication.service';
import { DiagnosisService } from './../../services/diagnosis.service';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Medication } from '../../models/medication';
import { Diagnosis } from '../../models/diagnosis';

@Component({
  selector: 'page-medication-list',
  templateUrl: 'medication-list.html',
  styleUrls: ['./medication-list.scss'],
})
export class MedicationListPage implements OnInit {

  // Fields
  medications: Medication[] = [];
  newMedication: Medication = new Medication();
  showInactive = false;
  viewMedForm = false;
  diagnosisList: Diagnosis[];

  // Constructors
  constructor(
    public actionSheetCtrl: ActionSheetController,
    public inAppBrowser: InAppBrowser,
    public router: Router,
    private medicationService: MedicationService,
    private diagnosisService: DiagnosisService
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

  showMedForm() {
    this.viewMedForm = true;
  }

  ionViewDidEnter() {
    this.medicationService.index().subscribe((medications: Medication[]) => {
      this.medications = medications;
    });
    this.diagnosisService.index().subscribe((diagnosisList: Diagnosis[]) => {
      this.diagnosisList = diagnosisList;
    });
  }

  addMed() {
    this.medicationService.create(this.newMedication).subscribe(
      good => {
        // console.log(good);
        this.viewMedForm = false;
        this.newMedication = new Medication();
      },
      bad => {
        console.error(bad);
      },
      () => {
        // this.newMedication = new Medication();
        this.reload();
      }
    );
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
