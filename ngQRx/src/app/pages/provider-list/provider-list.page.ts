import { ApprovedProviderService } from './../../services/ap.service';
import { Component, OnInit } from '@angular/core';
import { ApprovedProvider } from '../../models/approved-provider';
import { ActionSheetController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'provider-list',
  templateUrl: './provider-list.page.html',
  styleUrls: ['./provider-list.page.scss'],
})
export class ProviderListPage implements OnInit {
// Fields
providers: ApprovedProvider[] = [];
newApprovedProvider: ApprovedProvider = new ApprovedProvider();
viewNewProviderForm = false;

// Constructors
constructor(
  public actionSheetCtrl: ActionSheetController,
  public inAppBrowser: InAppBrowser,
  public router: Router,
  private apService: ApprovedProviderService
) {}

// Methods
ngOnInit(): void {
  this.reload();
}

reload() {
  this.apService.index().subscribe(
    good => {
      this.providers = good;
    },
    bad => {
      console.error(bad);
    }
  );
}

showProviderForm() {
  this.viewNewProviderForm = true;
}

ionViewDidEnter() {
  this.apService.index().subscribe((providers: ApprovedProvider[]) => {
    this.providers = providers;
  });
}

addProvider() {
  this.apService.create(this.newApprovedProvider).subscribe(
    good => {
      this.viewNewProviderForm = false;
      this.newApprovedProvider = null;
    },
    bad => {
      console.error(bad);
    },
    () => {
      this.reload();
    }
  );
}
}
