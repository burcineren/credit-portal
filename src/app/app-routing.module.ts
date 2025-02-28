import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditFormComponent } from './pages/credit-form/credit-form.component';
import { CreditsListComponent } from './pages/credits-list/credits-list.component';
import { CreditsReportComponent } from './pages/credits-report/credits-report.component';

const routes: Routes = [
  { path: '', component: CreditFormComponent, loadChildren: () => import('./pages/credit-form/credit-form.module').then(m => m.CreditFormModule) },
  { path: 'credits-list', component: CreditsListComponent, loadChildren: () => import('./pages/credits-list/credits-list.module').then(m => m.CreditsListModule) },
  { path: 'credits-report', component: CreditsReportComponent, loadChildren: () => import('./pages/credits-report/credits-report.module').then(m => m.CreditsReportModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
