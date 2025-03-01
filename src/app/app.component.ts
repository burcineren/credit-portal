import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDarkMode = false;

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
  }
}
