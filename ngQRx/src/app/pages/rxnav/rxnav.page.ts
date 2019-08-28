import { DrugService } from './../../services/drug.service';
import { Component, OnInit } from '@angular/core';
import { Drug } from '../../models/drug';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Router } from '@angular/router';
import { NavParams } from '@ionic/angular';


@Component({
  selector: 'rxnav',
  templateUrl: './rxnav.page.html',
  styleUrls: ['./rxnav.page.scss']
})
export class RxnavPage implements OnInit {
  matches: Drug[] = [];
  keyword = '';
  strength = '';
  loadingMatches = true;
  constructor(
    navParams: NavParams,
    private modalCtrl: ModalController,
    private drugSvc: DrugService,
    public actionSheetCtrl: ActionSheetController,
    public inAppBrowser: InAppBrowser,
    public router: Router
  ) {}

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  ionViewDidEnter() {
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
