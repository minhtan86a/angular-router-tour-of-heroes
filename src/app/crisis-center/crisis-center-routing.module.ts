
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisListComponent } from './crises-list/crisis-list.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisDetailComponent } from './crises-detail/crisis-detail.component';


//cli: ng generate module heroes/heroes --module app --flat --routing (create 2 files hero-routing.module.ts and heroes.module.ts)
//--routing create this file support RouterModule
//RouterModule.forRoot() in the root AppRoutingModule
//RouterModule.forChild() method to register additional routes.
const crisisCenterRoutes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        //data: { animation: 'crisis-center' },
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent,
            data: { animation: 'crisis' }, //'crises <= crisis'
          },
          {
            path: '',
            component: CrisisCenterHomeComponent,
            data: { animation: 'crises' }, //'crises => crisis'
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(crisisCenterRoutes)],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule { }
