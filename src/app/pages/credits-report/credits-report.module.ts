import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditsReportComponent } from './credits-report.component';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';


@NgModule({
  declarations: [
    CreditsReportComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ToastModule,
    ButtonModule,
    TagModule,
    RippleModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    MultiSelectModule
  ]
})
export class CreditsReportModule { }
