import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditFormComponent } from './credit-form.component';
import { ReactiveFormsModule } from '@angular/forms';


// PrimeNG modules
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    CreditFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule
  ]
})
export class CreditFormModule { }
