import { DrugService } from './../../services/drug.service';
import { AutoCompleteComponent } from './../../components/auto-complete/auto-complete.component';
import { Component, OnInit } from '@angular/core';
import { Drug } from '../../models/drug';
import { ActionSheetController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'rxnav',
  templateUrl: './rxnav.page.html',
  styleUrls: ['./rxnav.page.scss']
})
export class RxnavPage implements OnInit {
  drugs: Drug[] = [];

  constructor(
    private drugSvc: DrugService,
    public actionSheetCtrl: ActionSheetController,
    public inAppBrowser: InAppBrowser,
    public router: Router
  ) {}

  ngOnInit() {
  }

  search(keyword: string, strength?: string) {
    this.drugSvc.getResults(keyword, strength).subscribe(
      good => {
        this.drugs = good;
        console.log(this.drugs);
      },
      bad => {
        console.error(bad);
      }
    );
  }
}
