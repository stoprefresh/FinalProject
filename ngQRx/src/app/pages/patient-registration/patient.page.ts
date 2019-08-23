import { PatientService } from './../../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from '../../models/patient';
import { Router } from '@angular/router';
import { BloodType } from '../../models/blood-type';

@Component({
  selector: 'patient',
  templateUrl: './patient.page.html',
  styleUrls: ['./patient.page.scss'],
})
export class PatientPage implements OnInit {
  patient = new Patient();
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
  rh: string [] = null;

  constructor(private patientSvc: PatientService,
    private router: Router) { }

  ngOnInit() {
  }

  rhSelector() {

  }
  addPatient() {
    this.patientSvc.create(this.patient).subscribe(
      good => {
        this.router.navigateByUrl('/app/tabs/medications');
      },
      bad => {
        console.error('PatientRegister.addPatient(): error creating user.');
        console.error(bad);
      },
      () => {
      }
    );
  }
}
