import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ThemeComponent } from './theme.component';



@NgModule({
  declarations: [ThemeComponent],
  imports: [CommonModule, ButtonModule],
  exports: [ThemeComponent]
})
export class ThemeModule { }
