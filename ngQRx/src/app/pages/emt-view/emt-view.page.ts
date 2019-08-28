import { PatientService } from './../../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from '../../models/patient';

@Component({
  selector: 'emt-view',
  templateUrl: './emt-view.page.html',
  styleUrls: ['./emt-view.page.scss']
})
export class EmtViewPage implements OnInit {
  // Fields
  currentImage: any;
  encodeData: any;
  scannedData: {};
  currentPatient: Patient = null;
  manualIdEntry: false;
  username: String = null;

  // Contructors
  constructor(
    // private camera: Camera,
    private patientService: PatientService,
  ) {}

  // Methods
  ngOnInit() {}

  findPatient(username: any) {
    this.patientService.findByUserName(username).subscribe(
      good => {
        this.currentPatient = good;
      },
      bad => {
        console.error(bad);
      }
    );
  }

  scanCode() {

  }
}
