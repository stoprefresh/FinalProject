import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ContactsListPage } from './contacts-list';
import { ContactsListPageRoutingModule } from './contacts-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ContactsListPageRoutingModule,
    FormsModule
  ],
  declarations: [ContactsListPage]
})
export class ContactsListModule { }
