import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-credit-form',
  templateUrl: './credit-form.component.html',
  styleUrls: ['./credit-form.component.scss']
})
export class CreditFormComponent {
  creditForm!: FormGroup;

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

      this.creditForm.reset();
    }
  }
}
