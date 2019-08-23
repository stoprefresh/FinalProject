import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {

  // Fields
  encodeData: any;
  scannedData: {};
  elementType: 'url' | 'canvas' | 'img' = 'url';
  value: 'Techiediaries';


  // Constructor
  constructor() {
   }


  // Methods
  ngOnInit() {

  }

  // scanCode() {
  //   this.barcodeScanner
  //     .scan()
  //     .then(barcodeData => {
  //       alert('Barcode data ' + JSON.stringify(barcodeData));
  //       this.scannedData = barcodeData;
  //     })
  //     .catch(err => {
  //       console.log('Error', err);
  //     });
  // }

  // encodedText() {
  //   this.barcodeScanner
  //     .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData)
  //     .then(
  //       encodedData => {
  //         console.log(encodedData);
  //         this.encodeData = encodedData;
  //       },
  //       err => {
  //         console.log('Error occured : ' + err);
  //       }
  //     );
  // }

}
