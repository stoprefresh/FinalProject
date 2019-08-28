import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drug } from '../../models/drug';
import { DrugService } from '../../services/drug.service';

@Component({
  selector: 'drug-detail',
  templateUrl: 'drug-detail.page.html',
  styleUrls: ['./drug-detail.page.scss']
})
export class DrugDetailPage implements OnInit {
  // Fields
  drug: Drug = null;
  // editDrug: Drug = null;

  // Constructors
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private drugService: DrugService
  ) {}

  // Methods
  ngOnInit(): void {
  }

  ionViewDidEnter() {
    const drugId = this.route.snapshot.paramMap.get('drugId');
    this.drugService.show(drugId).subscribe(
      good => {
        this.drug = good;
      },
      bad => {
        this.router.navigateByUrl('**');
      }
      // () => {
      //   // this.editDrug = this.drug;
      // }
    );
  }

  // setEditDrug() {
  //   this.editDrug = Object.assign({}, this.drug);
  // }

  // saveEdit() {
  //   this.drugService.update(this.editDrug).subscribe(
  //     good => {
  //       this.drug = good;
  //       this.ionViewWillEnter();
  //     },
  //     bad => {
  //       console.error(bad);
  //     },
  //     () => {
  //       this.editDrug = null;
  //       this.router.navigateByUrl('app/tabs/allergies');
  //     }
  //   );
  // }

  // deleteDrug() {
  //   this.drugService.destroy(this.drug.id).subscribe(
  //     good => {
  //       this.router.navigateByUrl('app/tabs/allergies');
  //     },
  //     bad => {
  //       console.error(bad);
  //     },
  //     () => {
  //     }
  //   );
  // }

  // cancel() {
  //   this.editDrug = null;
  //   this.router.navigateByUrl('app/tabs/allergies');
  // }
}
