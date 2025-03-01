import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../theme/theme.module';
import { NavbarComponent } from './navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    ThemeModule,
    MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
