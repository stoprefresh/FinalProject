import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { AuthoService } from '../../services/autho.service';
import { UserData } from '../../services/user-data';
import { UserService } from '../../services/user.service';
import { Provider } from '../../models/provider';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  styleUrls: ['./register.scss']
})
export class RegisterPage {
  user: User = new User();
  provider = false;
  providerTitle = ' ';
  submitted = false;
  titleList: string[] = [
    'MD',
    'DO',
    'RN',
    'EMT',
    'LPN',
    'CMA',
    'Medical Assistant',
    'Nursing Assistant',
    'Home Health Aide',
    'Licensed Practical Nurse',
    'Physician',
    'Registered Nurse',
    'Pharmacy Technician',
    'Diagnostic Medical Sonographer',
    'Clinical Laboratory Technician',
    'Dental Assistant',
    'Emergency Medical Technician',
    'Radiologic Technologist',
    'Physical Therapist',
    'Dental Hygienist',
    'Health Information Technician',
    'Clinical Laboratory Technologist',
    'Occupational Therapy Aide',
    'Speech-Language Pathologist',
    'Respiratory Therapist',
    'Family Practitioner',
    'Dentist',
    'Nurse Practitioner',
    'Occupational Therapist',
    'Phlebotomist',
    'Surgical Technologist',
    'Physician Assistant',
    'Psychiatric Aide',
    'Medical Transcriptionist',
    'Physical Therapy Assistant',
    'Dispensing Optician',
    'Dietician',
    'Cardiovascular Technologist',
    'Medical Equipment Preparer',
    'Surgeon',
    'Nurse Anesthetist',
    'Pediatrician',
    'Anesthesiologist',
    'Magnetic Resonance Imaging Technologist',
    'Optometrist',
    'Psychiatrist',
    'Obstetrician'
  ];
  roleList: string[] = ['EMS', 'Physician', 'Pharmacist', 'Direct Care'];
  newProvider = new Provider();
  organizationList: string[] = [
    'Denver Metro Ambulance',
    'SD Internal Medicine Group',
    'Other'
  ];

  constructor(
    public router: Router,
    public userData: UserData,
    private auth: AuthoService,
    private userSvc: UserService,
    private providerService: ProviderService
  ) {}

  addUser() {
    this.submitted = true;
    if (!this.provider) {
      this.user.role = 'User';
    }
    this.userSvc.create(this.user).subscribe(
      good => {
        console.log('user created success');
      },
      bad => {
        console.error('RegisterComponent.addUser(): error creating user.');
      },
      () => {
        this.auth.login(this.user.username, this.user.password).subscribe(
          next => {
            this.userData.setLoggedIn();
          },
          bad => {
            console.error('error logging in');
          },
          () => {
            if (this.provider) {
              this.providerService.create(this.newProvider).subscribe(
                good => {
                    console.log('provider created');
                },
                bad => {
                  console.error(
                    'ProviderRegister.addProvider(): error creating provider.'
                  );
                  console.error(bad);
                },
                () => {
                  this.router.navigateByUrl('/patient-list');
                }
              );
            }
            this.router.navigateByUrl('/patient-registration');
          }
        );
      }
    );
  }
}
