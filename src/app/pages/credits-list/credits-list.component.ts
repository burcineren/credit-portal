import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { CreditApplicationService } from 'src/app/core/services/credit-application.service';
import { CreditApplication } from 'src/app/core/store/credits-state/credit-aplication.model';

@Component({
  selector: 'app-credits-list',
  templateUrl: './credits-list.component.html',
  styleUrls: ['./credits-list.component.scss']
})
export class CreditListComponent implements OnInit {
  applications: CreditApplication[] = [];
  expandedRows: { [key: string]: boolean } = {};

  constructor(private creditAppService: CreditApplicationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.creditAppService.getApplications().subscribe({
      next: (data) => {
        this.applications = data;
      },
      error: (err) => console.error('Error fetching applications:', err)
    });
  }

}
