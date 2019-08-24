import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { Diagnosis } from '../../models/diagnosis';
import { Medication } from '../../models/medication';
import { DiagnosisService } from './../../services/diagnosis.service';
import { MedicationService } from './../../services/medication.service';

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
  prescriberList: string[] = [ 'Kevin Smith MD' ];

  // Constructors
  constructor(
    public actionSheetCtrl: ActionSheetController,
    public inAppBrowser: InAppBrowser,
    public router: Router,
    private medicationService: MedicationService,
    private diagnosisService: DiagnosisService,

  ) {}

  // Methods
  ngOnInit(): void {
    this.reload();
  }

  reload() {
    this.medicationService.index().subscribe(
      good => {
          this.medications = good;
      },
      bad => {
        console.error(bad);
      }
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
        this.viewMedForm = false;
        this.newMedication = new Medication();
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
