import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from './../../services/patient.service';
import { BloodType } from './../../models/blood-type';
import { Patient } from './../../models/patient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'health-info',
  templateUrl: './health-info.page.html',
  styleUrls: ['./health-info.page.scss'],
})
export class HealthInfoPage implements OnInit {
  patient: Patient = null;
  bloodTypes: BloodType[] = [
    new BloodType (1, 'AB', false),
    new BloodType (2, 'AB', true),
    new BloodType (3, 'A', false),
    new BloodType (4, 'A', true),
    new BloodType (5, 'B', false),
    new BloodType (6, 'B', true),
    new BloodType (7, 'O', false),
    new BloodType (8, 'O', true)
];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ptSvc: PatientService
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.ptSvc.index().subscribe(
      good => {
        this.patient = good;
        console.log('good: ' + good);
        console.log('patient: ' + this.patient);
      },
      bad => {
        console.error(bad);
        this.router.navigateByUrl('**');
      }
    );
  }

  editPatientInfo() {
    this.ptSvc.update(this.patient).subscribe(
      good => {
        this.patient = this.patient;
      },
      bad => {
        console.error(bad);
      },
      () => {
        this.patient = null;
      }
    );
  }

}
