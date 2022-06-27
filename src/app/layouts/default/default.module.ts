import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { ReviewComponent } from '../../pages/review/review.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { ReviewTableComponent } from 'src/app/pages/review/components/review-table/review-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    DefaultComponent,
    ReviewComponent,
    DashboardComponent,
    ReviewTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule
  ],
  bootstrap: []
})
export class DefaultModule { }
