import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConferenceData } from '../../providers/conference-data';
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

    // this.dataProvider.load().subscribe((data: any) => {
    //   const medicationId = this.route.snapshot.paramMap.get('medicationId');
    //   if (data && data.medications) {
    //     for (const medication of data.medications) {
    //       if (medication && medication.id === medicationId) {
    //         this.medication = medication;
    //         break;
    //       }
    //     }
    //   }
    // });
  }
}
