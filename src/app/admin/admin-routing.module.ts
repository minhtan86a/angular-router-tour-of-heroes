import { AuthGuard } from './../auth/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';

const adminRoutes: Routes = [
	{
		path: 'admin',
		component: AdminComponent,
		canActivate: [AuthGuard],
		children: [
			{
				//The child route under the AdminComponent has a path and a children property but it's not using a component. This defines a component-less route.
				path: '',
				children: [
					{ path: 'crises', component: ManageCrisesComponent },
					{ path: 'heroes', component: ManageHeroesComponent },
					{ path: '', component: AdminDashboardComponent }
				]
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(adminRoutes)],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
