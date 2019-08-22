import { ContactService } from './../../services/contact.service';
import { EmergencyContact } from './../../models/emergency-contact';
import { PatientService } from './../../services/patient.service';
import { Component, OnInit } from '@angular/core';
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from '@ionic-native/barcode-scanner/ngx';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Patient } from '../../models/patient';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'emt-view',
  templateUrl: './emt-view.page.html',
  styleUrls: ['./emt-view.page.scss'],
})
export class EmtViewPage implements OnInit {

  // Fields
  currentImage: any;
  encodeData: any;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;
  currentPatient: Patient = null;
  manualIdEntry: false;
  username: String = null;

  // Contructors
 constructor(
   private qrScanner: QRScanner,
   private route: ActivatedRoute,
    // private camera: Camera,
    private barcodeScanner: BarcodeScanner,
    private patientService: PatientService,
    private emergencyContactService: ContactService
   ) { }

 // Methods
 ngOnInit() {
 }

 findPatient(username: any) {
   console.log(username);
    this.patientService.findByUserName(username).subscribe(
      good => {
        this.currentPatient = good;
        username = null;
        console.log(this.currentPatient.emergencyContacts);
      },
      bad => {
        console.error(bad);
      }
    );
 }

 scanCode() {
   this.barcodeScanner
     .scan()
     .then(barcodeData => {
       alert('Barcode data ' + JSON.stringify(barcodeData));
       this.scannedData = barcodeData;
     })
     .catch(err => {
       console.log('Error', err);
     });
 }


}
