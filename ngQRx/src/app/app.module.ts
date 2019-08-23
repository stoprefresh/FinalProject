import { ProviderService } from './services/provider.service';
import { PatientService } from './services/patient.service';
import { UserService } from './services/user.service';
import { ContactService } from './services/contact.service';
import { AllergyService } from './services/allergy.service';
import { FormsModule } from '@angular/forms';
import { MedicationService } from './services/medication.service';
import { AuthoService } from './services/autho.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DatePipe } from '@angular/common';
import { NoteService } from './services/note.service';
import { DiagnosisService } from './services/diagnosis.service';

import { Camera } from '@ionic-native/camera/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    FormsModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    InAppBrowser,
    SplashScreen,
    StatusBar,
    AuthoService,
    MedicationService,
    DatePipe,
    NoteService,
    AllergyService,
    ContactService,
    DiagnosisService,
    UserService,
    PatientService,
    Camera,
    QRScanner,
    BarcodeScanner,
    ProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
