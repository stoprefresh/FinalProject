import { ProviderService } from './../../services/provider.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Provider } from '../../models/provider';

@Component({
  selector: 'provider',
  templateUrl: './provider.page.html',
  styleUrls: ['./provider.page.scss']
})
export class ProviderPage implements OnInit {
  provider = new Provider();
  organizationList: string[] = ['Denver Metro Ambulance', 'SD Internal Medicine Group', 'Other'];
  constructor(private providerSvc: ProviderService, private router: Router) {}

  ngOnInit() {}

  addProvider() {
    this.providerSvc.create(this.provider).subscribe(
      good => {
        this.router.navigateByUrl('/patient-registration');
      },
      bad => {
        console.error('ProviderRegister.addProvider(): error creating user.');
        console.error(bad);
      },
      () => {}
    );
  }
}
