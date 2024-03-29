import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListPage } from './../contacts-list/contacts-list';
import { TabsPage } from './tabs-page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'contacts',
        children: [
          {
            path: '',
            loadChildren: () => import('../contacts-list/contacts-list.module').then(m => m.ContactsListModule)
          },
          {
            path: 'contacts-detail/:contactId',
            loadChildren: () => import('../edit-contact/edit-contact.module').then(m => m.EditContactPageModule)
          }
        ]
      },
      {
        path: 'medications',
        children: [
          {
            path: '',
            loadChildren: () => import('../medication-list/medication-list.module').then(m => m.MedicationListModule)
          },
          {
            path: 'medication-details/:medicationId',
            loadChildren: () => import('../medication-detail/medication-detail.module').then(m => m.MedicationDetailModule)
          }
        ]
      },
      {
        path: 'allergies',
        children: [
          {
            path: '',
            loadChildren: () => import('../allergy-list/allergy-list.module').then(m => m.AllergyListModule)
          }
          ,
          {
            path: 'allergy-detail/:allergyId',
            loadChildren: () => import('../allergy-detail/allergy-detail.module').then(m => m.AllergyDetailModule)
          }
        ]
      },
      {
        path: 'notes',
        children: [
          {
            path: '',
            loadChildren: () => import('../note-list/note-list.module').then(m => m.NoteListModule)
          },
          {
            path: 'note-details/:noteId',
            loadChildren: () => import('../note-detail/note-detail.module').then(m => m.NoteDetailPageModule)
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

