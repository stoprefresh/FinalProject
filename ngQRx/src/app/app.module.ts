import { DrugService } from './services/drug.service';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { QrGeneratorService } from './services/qr-generator.service';
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
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DatePipe } from '@angular/common';
import { NoteService } from './services/note.service';
import { DiagnosisService } from './services/diagnosis.service';
import { UserData } from './services/user-data';
import { AutoCompleteModule } from 'ionic4-auto-complete';


@NgModule({
  imports: [
    BrowserModule,
    AutoCompleteModule,
    AppRoutingModule,
    AutoCompleteModule,
    HttpClientModule,
    IonicModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    FormsModule
  ],
  declarations: [
    AppComponent,
    AutoCompleteComponent
  ],
  providers: [
    InAppBrowser,
    AuthoService,
    MedicationService,
    DatePipe,
    NoteService,
    AllergyService,
    ContactService,
    DiagnosisService,
    UserData,
    UserService,
    PatientService,
    ProviderService,
    QrGeneratorService,
    DrugService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
