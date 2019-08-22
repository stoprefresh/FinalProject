import { Component, OnInit } from '@angular/core';
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from '@ionic-native/barcode-scanner/ngx';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Patient } from '../../models/patient';



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

  // Contructors
 constructor(
   private qrScanner: QRScanner,
    // private camera: Camera,
    private barcodeScanner: BarcodeScanner
   ) { }

 // Methods
 ngOnInit() {
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
