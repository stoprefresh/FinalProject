import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medication } from '../../models/medication';
import { MedicationService } from '../../services/medication.service';

@Component({
  selector: 'page-medication-detail',
  templateUrl: 'medication-detail.html',
  styleUrls: ['./medication-detail.scss']
})
export class MedicationDetailPage implements OnInit {
  // Fields
  medication: Medication = null;
  editMedication: Medication = null;

  // Constructors
  constructor(
    private dataProvider: ConferenceData,
    private router: Router,
    private route: ActivatedRoute,
    private medicationService: MedicationService
  ) {}

  // Methods
  ngOnInit(): void {}

  ionViewWillEnter() {
    const medicationId = this.route.snapshot.paramMap.get('medicationId');
    console.log(`ID is ${medicationId}   ********************`);
    this.medicationService.show(medicationId).subscribe(
      good => {
        console.log('Life is Good');
        console.log(good);
        this.medication = good;
      },
      bad => {
        console.log('Life is Bad');
        console.error(bad);
        this.router.navigateByUrl('**');
      }
    );
  }

  setEditMedication() {
    this.editMedication = Object.assign({}, this.medication);
  }

  saveEdit() {
    console.log(this.editMedication);
    this.medicationService.update(this.editMedication).subscribe(
      good => {
        console.log(good);
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
        console.log('Delete successful');
        console.log(good);
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
