import { Component, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { CreditApplicationService } from 'src/app/core/services/credit-application.service';
import { CreditApplication } from 'src/app/core/store/credits-state/credit-aplication.model';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-credits-report',
  templateUrl: './credits-report.component.html',
  styleUrls: ['./credits-report.component.scss']
})
export class CreditsReportComponent {
  @ViewChild('dt') dt!: Table;
  @ViewChild('reportTable') reportTable!: Table;
  applications: CreditApplication[] = [];
  selectedApplication: CreditApplication | null = null;
  expandedRows: { [key: string]: boolean } = {};
  selectedGroup: any;
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
  getGroupCount(groupValue: any): number {
    if (!this.selectedGroup) return 0;
    return this.applications.filter(app => {
      // if (this.selectedGroup.value === 'applicationDate') {
      //   return new Date(app.applicationDate).toDateString() === new Date(groupValue).toDateString();
      // } else {
      //   return app[this.selectedGroup.value] === groupValue;
      // }
    }).length;
  }

  getGroupAverage(groupValue: any): number {
    if (!this.selectedGroup) return 0;
    const groupApps = this.applications.filter(app => {
      // if (this.selectedGroup.value === 'applicationDate') {
      //   return new Date(app.applicationDate).toDateString() === new Date(groupValue).toDateString();
      // } else {
      //   return app[this.selectedGroup.value] === groupValue;
      // }
    });
    if (groupApps.length === 0) return 0;
    const total = groupApps.reduce((acc, cur) => acc + cur.creditAmount, 0);
    return total / groupApps.length;
  }

  exportCSV() {
    this.reportTable.exportCSV();
  }

  exportExcel() {
    // Verileri Excel'e aktarmak için XLSX kütüphanesi kullanılıyor.
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.applications);
    const workbook: XLSX.WorkBook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    XLSX.writeFile(workbook, 'credits-report.xlsx');
  }
}
