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
  @ViewChild('reportTable') reportTable: Table | undefined;
  applications: CreditApplication[] = [];
  selectedGroup: any;
  constructor(private creditAppService: CreditApplicationService, private messageService: MessageService) { }
  groupOptions = [
    { label: 'Kredi Türü', value: 'creditType' },
    { label: 'Gelir', value: 'income' },
    { label: 'Başvuru Tarihi', value: 'applicationDate' }
  ];
  ngOnInit(): void {
    this.creditAppService.getApplications().subscribe({
      next: (data) => {
        this.applications = data;
      },
      error: (err) => console.error('Error fetching applications:', err)
    });
  }
  getOverallAverage(): number {
    if (!this.applications || this.applications.length === 0) {
      return 0;
    }
    const totalCredit = this.applications.reduce((sum, app) => sum + app.creditAmount, 0);
    return Math.round(totalCredit / this.applications.length);
  }

  //TODO: for CSV
  // exportCSV() {
  //   if (this.reportTable && this.applications && this.applications.length > 0) {
  //     this.reportTable.exportCSV();
  //   } else {
  //     console.error('reportTable or data is undefined');
  //   }
  // }

  exportExcel() {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.applications);

    const workbook: XLSX.WorkBook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    XLSX.writeFile(workbook, 'credits-report.xlsx');
  }
  getTotal(field: keyof CreditApplication): number {
    if (!this.applications || this.applications.length === 0) {
      return 0;
    }
    return this.applications.reduce((sum, app) => sum + (app[field] as number), 0);
  }
}
