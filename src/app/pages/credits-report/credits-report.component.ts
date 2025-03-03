import { Component, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ALL_COLUMNS, GROUP_OPTIONS } from 'src/app/core/enums/column-options.enum';
import { CreditApplicationService } from 'src/app/core/services/credit-application.service';
import { CreditApplication } from 'src/app/core/store/credits-state/credit-aplication.model';
import * as XLSX from 'xlsx';
import { filterApplications, getTotalAmount, extractYears } from 'src/app/core/utils/credit-utils';
@Component({
  selector: 'app-credits-report',
  templateUrl: './credits-report.component.html',
  styleUrls: ['./credits-report.component.scss']
})
export class CreditsReportComponent {
  @ViewChild('reportTable') reportTable: Table | undefined;
  applications: CreditApplication[] = [];
  filteredApplications: CreditApplication[] = [];
  selectedGroup: string | null = null;
  selectedYear: string | null = null;
  availableYears: { label: string; value: string }[] = [];
  globalFilter: string = '';

  allColumns = ALL_COLUMNS;
  selectedColumns = [...ALL_COLUMNS];
  groupOptions = GROUP_OPTIONS;

  constructor(private creditAppService: CreditApplicationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.creditAppService.getApplications().subscribe({
      next: (data) => {
        this.applications = data.map(app => ({
          ...app,
          applicationDate: new Date(app.applicationDate)
        }));
        this.availableYears = extractYears(this.applications);
        this.applyFilters();
      },
      error: (err) => console.error('Error fetching applications:', err)
    });
  }

  applyFilters() {
    this.filteredApplications = filterApplications(this.applications, this.selectedGroup, this.selectedYear, this.globalFilter);
  }

  getTotal(field: keyof CreditApplication): number {
    return getTotalAmount(this.filteredApplications, field);
  }

  exportExcel() {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.filteredApplications);
    const workbook: XLSX.WorkBook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    XLSX.writeFile(workbook, 'credits-report.xlsx');
  }
}
