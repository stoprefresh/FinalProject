import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { UserData } from '../../services/user-data';
import { User } from '../../models/user';
import { AuthoService } from '../../services/autho.service';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  styleUrls: ['./register.scss']
})
export class RegisterPage {
  user: User = new User();
  provider = false;
  providerRole = ' ';
  providerTitle = ' ';
  titleList: string[] = [ 'Medical Assistant', 'Nursing Assistant', 'Home Health Aide',
                          'Licensed Practical Nurse', 'Physician', 'Registered Nurse',
                          'Pharmacy Technician', 'Diagnostic Medical Sonographer', 'Clinical Laboratory Technician',
                          'Dental Assistant', 'Emergency Medical Technician', 'Radiologic Technologist', 'Physical Therapist',
                          'Dental Hygienist', 'Health Information Technician', 'Clinical Laboratory Technologist', 'Occupational Therapy Aide',
                          'Speech-Language Pathologist', 'Respiratory Therapist', 'Family Practitioner', 'Dentist', 'Nurse Practitioner',
                          'Occupational Therapist', 'Phlebotomist', 'Surgical Technologist', 'Physician Assistant', 'Psychiatric Aide',
                          'Medical Transcriptionist', 'Physical Therapy Assistant', 'Dispensing Optician', 'Dietician', 'Cardiovascular Technologist',
                          'Medical Equipment Preparer', 'Surgeon', 'Nurse Anesthetist', 'Pediatrician', 'Anesthesiologist',
                          'Magnetic Resonance Imaging Technologist', 'Optometrist', 'Psychiatrist', 'Obstetrician'];
  roleList: string[] = ['EMS', 'Physician', 'Pharmacist', 'Direct Care'];

  constructor(
    public router: Router,
    public userData: UserData,
    private auth: AuthoService,
    private userSvc: UserService
  ) {}

  addUser() {
    this.userSvc.create(this.user).subscribe(
      good => {
        this.auth.login(this.user.username, this.user.password).subscribe(
          next => {
            if (this.provider) {
              this.userData.setLoggedIn();
              this.router.navigateByUrl('/provider-registration');
            } else {
            }
          },
          error => {
            console.error('RegisterComponent.addUser(): error creating user.');
          }
        );
      },
      bad => {
        console.error('RegisterComponent.addUser(): error creating user.');
        console.error(bad);
      }
    );
  }
}
