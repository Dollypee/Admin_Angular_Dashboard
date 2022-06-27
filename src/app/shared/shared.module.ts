import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    RouterModule
  ],
  exports: [HeaderComponent, SidebarComponent],
  bootstrap: [HeaderComponent, SidebarComponent],
})
export class SharedModule { }
