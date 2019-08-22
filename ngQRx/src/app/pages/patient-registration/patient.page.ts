import { PatientService } from './../../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from '../../models/patient';
import { Router } from '@angular/router';

@Component({
  selector: 'patient',
  templateUrl: './patient.page.html',
  styleUrls: ['./patient.page.scss'],
})
export class PatientPage implements OnInit {

  patient = new Patient();

  constructor(private patientSvc: PatientService,
    private router: Router) { }

  ngOnInit() {
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
