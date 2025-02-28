import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { CreditApplicationService } from 'src/app/core/shared/services/credit-application.service';
import { CreditApplication } from 'src/app/core/store/credits-state/credit-aplication.model';

@Component({
  selector: 'app-credits-list',
  templateUrl: './credits-list.component.html',
  styleUrls: ['./credits-list.component.scss']
})
export class CreditListComponent implements OnInit {
  @ViewChild('dt') dt!: Table;
  applications: CreditApplication[] = [];
  selectedApplication: CreditApplication | null = null;
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
  applyFilter(event: Event, field: string) {
    const input = event.target as HTMLInputElement;
    this.dt.filter(input.value, field, 'contains');
  }
  onRowSelect(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: event.data.name });
  }

  onRowUnselect(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Product Unselected', detail: event.data.name });
  }


  collapseAll() {
    this.expandedRows = {};
  }

}
