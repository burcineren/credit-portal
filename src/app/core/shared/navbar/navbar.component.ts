import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

import { MenuItem } from 'primeng/api';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Kredi Başvuru Formu',
        link: '/'
      },
      {
        label: 'Başvuru Listesi',
        link: '/credits-list'
      },
      {
        label: 'Pivot Table Raporlama Ekranı',
        link: '/credits-report'
      }
    ];
  }

}
