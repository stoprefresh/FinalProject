import { DiagnosisService } from './../../services/diagnosis.service';
import { Diagnosis } from './../../models/diagnosis';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medication } from '../../models/medication';
import { MedicationService } from '../../services/medication.service';
import { ApprovedProvider } from '../../models/approved-provider';
import { ApprovedProviderService } from '../../services/ap.service';

@Component({
  selector: 'page-medication-detail',
  templateUrl: 'medication-detail.html',
  styleUrls: ['./medication-detail.scss']
})
export class MedicationDetailPage implements OnInit {
  // Fields
  medication: Medication = null;
  editMedication: Medication = null;
  prescriberList: ApprovedProvider[] = [];
  diagnosisList: Diagnosis[] = [];

  // Constructors
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private medicationService: MedicationService,
    private diagnosisService: DiagnosisService,
    private approvedProviderService: ApprovedProviderService
  ) {}

  // Methods
  ngOnInit(): void {}

  ionViewDidEnter() {
    const medicationId = this.route.snapshot.paramMap.get('medicationId');
    this.medicationService.show(medicationId).subscribe(
      good => {
        this.medication = good;
      },
      bad => {
        console.error(bad);
        this.router.navigateByUrl('**');
      }
    );
    this.diagnosisService.index().subscribe((diagnosisList: Diagnosis[]) => {
      this.diagnosisList = diagnosisList;
    });
    this.approvedProviderService.index().subscribe((prescriberList: ApprovedProvider[]) => {
      this.prescriberList = prescriberList;
    });
  }

  setEditMedication() {
    this.editMedication = Object.assign({}, this.medication);
  }

  saveEdit() {
    this.medicationService.update(this.editMedication).subscribe(
      good => {
        this.medication = this.editMedication;
      },
      bad => {
        console.error(bad);
      },
      () => {
        this.editMedication = null;
      }
    );
  }

  deleteMed() {
    this.medicationService.destroy(this.medication.id).subscribe(
      good => {
        this.router.navigateByUrl('app/tabs/medications');
      },
      bad => {
        console.error(bad);
      },
      () => {
      }
    );
  }

}
