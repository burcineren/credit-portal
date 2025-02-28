import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { MessageService } from 'primeng/api';
import { AddCreditApplication } from 'src/app/core/store/credits-state/credit-aplication.actions';
@Component({
  selector: 'app-credit-form',
  templateUrl: './credit-form.component.html',
  styleUrls: ['./credit-form.component.scss']
})
export class CreditFormComponent {
  creditForm!: FormGroup;
  constructor(private store: Store, private messageService: MessageService, private router: Router) { }
  ngOnInit(): void {
    this.creditForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      tcNo: new FormControl('', [Validators.required, Validators.pattern(/^\d{11}$/)]),
      phone: new FormControl('', Validators.required),
      income: new FormControl('', [Validators.required, Validators.min(0)]),
      creditAmount: new FormControl('', [Validators.required, Validators.min(0)]),
      creditType: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    if (this.creditForm.valid) {
      console.log('Form Data:', this.creditForm.value);
      this.store.dispatch(new AddCreditApplication(this.creditForm.value)).subscribe({
        next: () => {
          console.log('Application added successfully:', this.creditForm.value);
          this.messageService.add({
            severity: 'success',
            summary: 'Başarılı',
            detail: 'Başvuru başarıyla eklendi'
          });
          this.creditForm.reset();
          this.router.navigate(['/credits-list']);
        },
        error: err => console.error('Error adding application', err)
      });
    }
  }
}
