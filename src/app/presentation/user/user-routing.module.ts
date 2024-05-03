import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from 'src/app/utils/guards/admin.guard';
import { cashierGuard } from 'src/app/utils/guards/cashier.guard';
import { userGuard } from 'src/app/utils/guards/user.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'admin', component: UserComponent, canActivate: [adminGuard] },
      { path: 'cajero', component: UserComponent, canActivate: [cashierGuard] },
    ],
    canActivate: [userGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
