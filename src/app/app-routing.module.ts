import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditFormComponent } from './pages/credit-form/credit-form.component';

const routes: Routes = [
  { path: '', component: CreditFormComponent, loadChildren: () => import('./pages/credit-form/credit-form.module').then(m => m.CreditFormModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
