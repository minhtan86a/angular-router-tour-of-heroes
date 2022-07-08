import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';

//cli: ng generate module heroes/heroes --module app --flat --routing (create 2 files hero-routing.module.ts and heroes.module.ts)
//--routing create this file support RouterModule
//RouterModule.forRoot() in the root AppRoutingModule
//RouterModule.forChild() method to register additional routes.
const routes: Routes = [
  { path: 'heroes',  component: HeroListComponent },
  { path: 'hero/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
