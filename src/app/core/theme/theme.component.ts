import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
})
export class ThemeComponent {
  darkMode$ = this.themeService.darkMode$;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.initializeTheme();
  }

  toggleTheme(): void {
    this.themeService.toggleDarkMode();
  }
}
