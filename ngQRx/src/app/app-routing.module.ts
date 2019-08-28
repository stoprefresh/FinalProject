import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./pages/edit-user/account.module').then(m => m.AccountModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/user-registration/register.module').then(
        m => m.RegisterModule
      )
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
  },
  {
    path: 'provider-registration',
    loadChildren: () =>
      import('./pages/provider-registration/provider.module').then(
        m => m.ProviderPageModule
      )
  },
  {
    path: 'patient-registration',
    loadChildren: () =>
      import('./pages/patient-registration/patient.module').then(
        m => m.PatientPageModule
      )
  },
  {
    path: 'emt-view',
    loadChildren: () =>
      import('./pages/emt-view/emt-view.module').then(
        m => m.EmtViewPageModule
      )
  },
  {
    path: 'qr-code',
    loadChildren: () =>
      import('./pages/qr-code/qr-code.module').then(
        m => m.QrCodePageModule
      )
  },
  {
    path: 'health-info',
    loadChildren: () =>
      import(
        './pages/health-info/health-info.module'
      ).then(m => m.HealthInfoPageModule)
  },
  { path: 'patient-list', loadChildren: './pages/patient-list/patient-list.module#PatientListPageModule' },
  { path: 'patient-detail', loadChildren: './pages/patient-detail/patient-detail.module#PatientDetailPageModule' },
  { path: 'provider-list', loadChildren: './pages/provider-list/provider-list.module#ProviderListPageModule' },
  { path: 'provider-detail', loadChildren: './pages/provider-detail/provider-detail.module#ProviderDetailPageModule' },
  { path: 'rxnav', loadChildren: './pages/rxnav/rxnav.module#RxnavPageModule' },
  { path: 'admin-dashboard', loadChildren: './pages/admin-dashboard/admin-dashboard.module#AdminDashboardPageModule' },
  { path: 'drug-detail/:drugId', loadChildren: './pages/drug-detail/drug-detail.module#DrugDetailPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
