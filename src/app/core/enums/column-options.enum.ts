
export enum ColumnOptions {
  FirstName = 'firstName',
  LastName = 'lastName',
  TCNo = 'tcNo',
  Phone = 'phone',
  Income = 'income',
  CreditAmount = 'creditAmount',
  CreditType = 'creditType',
  ApplicationDate = 'applicationDate'
}


export enum GroupOptions {
  All = 'Tümü',
  Housing = 'Konut',
  Business = 'İş',
  Commercial = 'Ticari'
}

export const ALL_COLUMNS = [
  { field: ColumnOptions.FirstName, header: 'Adı' },
  { field: ColumnOptions.LastName, header: 'Soyadı' },
  { field: ColumnOptions.TCNo, header: 'TC No' },
  { field: ColumnOptions.Phone, header: 'Telefon' },
  { field: ColumnOptions.Income, header: 'Gelir' },
  { field: ColumnOptions.CreditAmount, header: 'Kredi Tutarı' },
  { field: ColumnOptions.CreditType, header: 'Kredi Türü' },
  { field: ColumnOptions.ApplicationDate, header: 'Başvuru Tarihi' }
];

export const GROUP_OPTIONS = [
  { label: GroupOptions.All, value: null },
  { label: GroupOptions.Housing, value: 'Konut' },
  { label: GroupOptions.Business, value: 'İş' },
  { label: GroupOptions.Commercial, value: 'Ticari' }
];
