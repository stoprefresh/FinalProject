import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Allergy } from '../../models/allergy';
import { AllergyService } from '../../services/allergy.service';

@Component({
  selector: 'allergy-detail',
  templateUrl: 'allergy-detail.page.html',
  styleUrls: ['./allergy-detail.page.scss']
})
export class AllergyDetailPage implements OnInit {
  // Fields
  allergy: Allergy = null;
  editAllergy: Allergy = null;

  // Constructors
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private allergyService: AllergyService
  ) {}

  // Methods
  ngOnInit(): void {}

  ionViewWillEnter() {
    const allergyId = this.route.snapshot.paramMap.get('allergyId');
    this.allergyService.show(allergyId).subscribe(
      good => {
        this.allergy = good;
      },
      bad => {
        this.router.navigateByUrl('**');
      }
    );
  }

  setEditAllergy() {
    this.editAllergy = Object.assign({}, this.allergy);
  }

  saveEdit() {
    this.allergyService.update(this.editAllergy).subscribe(
      good => {
        this.allergy = good;
        this.ionViewWillEnter();
      },
      bad => {
        console.error(bad);
      },
      () => {
        this.editAllergy = null;
      }
    );
  }

  deleteAllergy() {
    this.allergyService.destroy(this.allergy.id).subscribe(
      good => {
        this.router.navigateByUrl('app/tabs/allergies');
      },
      bad => {
        console.error(bad);
      },
      () => {
      }
    );
  }

}
