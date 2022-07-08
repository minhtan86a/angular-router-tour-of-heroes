import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//cli: ng generate module heroes/heroes --module app --flat --routing (create 2 files hero-routing.module.ts and heroes.module.ts)
//--routing create this file support RouterModule
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
