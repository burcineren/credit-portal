// theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkMode.asObservable();

  toggleDarkMode(): void {
    const currentValue = this.darkMode.value;
    this.darkMode.next(!currentValue);
    this.applyTheme(!currentValue);
  }

  initializeTheme(): void {
    const savedTheme = localStorage.getItem('darkMode');
    const isDarkMode = savedTheme === 'true';

    this.darkMode.next(isDarkMode);
    this.applyTheme(isDarkMode);
  }

  private applyTheme(isDarkMode: boolean): void {
    localStorage.setItem('darkMode', isDarkMode.toString());

    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}
