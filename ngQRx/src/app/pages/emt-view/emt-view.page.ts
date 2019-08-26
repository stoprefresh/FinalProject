import { PatientService } from './../../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from '../../models/patient';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from '@ionic-native/barcode-scanner/ngx';

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

    private patientService: PatientService,
    private camera: Camera,
    private barcodeScanner: BarcodeScanner
  ) {}

  // Methods
  ngOnInit() {}

  scanCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        alert('Barcode data ' + JSON.stringify(barcodeData));
        this.findPatient(barcodeData);
        this.scannedData = barcodeData;
      })
      .catch(err => {
        console.log('Error', err);
      });
  }

  findPatient(username: any) {
    this.patientService.findByUserName(username).subscribe(
      good => {
        this.currentPatient = good;
        console.log(good);
        console.log(username);
      },
      bad => {
        console.error(bad);
      }
    );
  }


}
