import { ApprovedProvider } from './../../models/approved-provider';
import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { Diagnosis } from '../../models/diagnosis';
import { Medication } from '../../models/medication';
import { DiagnosisService } from './../../services/diagnosis.service';
import { MedicationService } from './../../services/medication.service';
import { ApprovedProviderService } from './../../services/ap.service';

@Component({
  selector: 'page-medication-list',
  templateUrl: 'medication-list.html',
  styleUrls: ['./medication-list.scss']
})
export class MedicationListPage implements OnInit {
  // Fields
  medications: Medication[] = [];
  newMedication: Medication = new Medication();
  viewMedForm = false;
  diagnosisList: Diagnosis[];
  prescriberList: ApprovedProvider[] = [];

  // Constructors
  constructor(
    public actionSheetCtrl: ActionSheetController,
    public inAppBrowser: InAppBrowser,
    public router: Router,
    private medicationService: MedicationService,
    private diagnosisService: DiagnosisService,
    private approvedProviderService: ApprovedProviderService
  ) {}

  // Methods
  ngOnInit(): void {
  }

  ionViewDidLoad(): void {
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
    this.approvedProviderService.index().subscribe((prescriberList: ApprovedProvider[]) => {
      this.prescriberList = prescriberList;
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
