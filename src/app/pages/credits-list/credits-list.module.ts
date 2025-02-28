import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { RippleModule } from 'primeng/ripple';
import { CreditListComponent } from './credits-list.component';
import { CreditApplicationService } from 'src/app/core/shared/services/credit-application.service';
@NgModule({
  declarations: [CreditListComponent],
  imports: [
    CommonModule,
    TableModule,
    ToastModule,
    ButtonModule,
    TagModule,
    RippleModule,
  ],
  providers: [CreditApplicationService],
})
export class CreditsListModule { }
