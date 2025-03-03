
import { CreditApplication } from "../store/credits-state/credit-aplication.model";

export function filterApplications(
  applications: CreditApplication[],
  selectedGroup: string | null,
  selectedYear: string | null,
  globalFilter: string
): CreditApplication[] {
  return applications.filter(app => {
    const matchesCreditType = selectedGroup ? app.creditType === selectedGroup : true;
    const matchesYear = selectedYear ? app.applicationDate.getFullYear().toString() === selectedYear : true;
    const matchesGlobalFilter = globalFilter
      ? Object.values(app).some(value => value && value.toString().toLowerCase().includes(globalFilter.toLowerCase()))
      : true;
    return matchesCreditType && matchesYear && matchesGlobalFilter;
  });
}

export function getTotalAmount(applications: CreditApplication[], field: keyof CreditApplication): number {
  return applications.reduce((sum, app) => sum + (app[field] as number), 0);
}

export function extractYears(applications: CreditApplication[]): { label: string; value: string }[] {
  const yearsSet = new Set<string>();
  applications.forEach(app => {
    const year = app.applicationDate.getFullYear().toString();
    yearsSet.add(year);
  });
  return Array.from(yearsSet).sort().map(year => ({ label: year, value: year }));
}
