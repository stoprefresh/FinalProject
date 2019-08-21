import { ProviderService } from './../../services/provider.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Provider } from '../../models/provider';

@Component({
  selector: 'provider',
  templateUrl: './provider.page.html',
  styleUrls: ['./provider.page.scss'],
})
export class ProviderPage implements OnInit {
  provider = new Provider();
  submitted = false;

  constructor(private providerSvc: ProviderService,
    private router: Router) { }

  ngOnInit() {
  }

  addProvider() {
    this.providerSvc.create(this.provider).subscribe(
      good => {
        console.log(good);
        console.log('PatientSignup.addPatient(): IN GOOD.');
        this.submitted = true;
        this.router.navigateByUrl('/account');
      },
      bad => {
        console.error('PatientSignup.addPatient(): error creating user.');
        console.error(bad);
      },
      () => {
      }
    );
  }

}
