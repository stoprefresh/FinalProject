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
    loadChildren: () => import('./pages/edit-user/account.module').then(m => m.AccountModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/user-registration/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
  },
  { path: 'provider-registration', loadChildren: './pages/provider-registration/provider.module#ProviderPageModule' },
  { path: 'patient-registration', loadChildren: './pages/patient-registration/patient.module#PatientPageModule' },
  { path: 'emt-view', loadChildren: './pages/emt-view/emt-view.module#EmtViewPageModule' },
  { path: 'qr-code', loadChildren: './pages/qr-code/qr-code.module#QrCodePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
