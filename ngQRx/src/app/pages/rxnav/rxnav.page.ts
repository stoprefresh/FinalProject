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
  matches: Drug[] = [];
  keyword = '';
  strength = '';
  loadingMatches = false;
  constructor(
    private drugSvc: DrugService,
    public actionSheetCtrl: ActionSheetController,
    public inAppBrowser: InAppBrowser,
    public router: Router
  ) {}

  ngOnInit() {
  }

  getResults() {
    this.matches = [];
    this.loadingMatches = true;
    this.drugSvc.getResults(this.keyword).subscribe(
      good => {
        this.matches = good;
        this.loadingMatches = false;
      },
      err => {
        this.loadingMatches = false;
        console.log('err: ', err);
      }
    );
  }
}
