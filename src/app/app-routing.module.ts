import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { ReviewComponent } from './pages/review/review.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent 
  }, {
    path: 'dashboard',
    component: DashboardComponent
    },
    {
    path: 'review',
    component: ReviewComponent
    },
    {
      path: 'partners',
      component: ReviewComponent
    },
    {
      path: 'rates',
      component: ReviewComponent
    },
    {
      path: 'fees',
      component: ReviewComponent
    },
    {
      path: 'user_management',
      component: ReviewComponent
    },
    {
      path: 'approval_queue',
      component: ReviewComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
