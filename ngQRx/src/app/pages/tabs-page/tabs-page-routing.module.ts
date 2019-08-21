import { ContactsListPage } from './../contacts-list/contacts-list';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { SchedulePage } from '../schedule/schedule';


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
            component: ContactsListPage,
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
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
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
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
        ]
      },
      {
        path: 'notes',
        children: [
          {
            path: '',
            loadChildren: () => import('../note-list/note-list.module').then(m => m.NoteListModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/schedule',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

