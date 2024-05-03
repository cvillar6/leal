import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { RouterOutlet } from '@angular/router';
import { CountUserComponent } from './components/count-user/count-user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { DataUserComponent } from './components/data-user/data-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { ModalUserComponent } from './components/modal-user/modal-user.component';
import { TableUserComponent } from './components/table-user/table-user.component';
import { UserComponent } from './components/user/user.component';
import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const angularMaterialModules = [
  MatExpansionModule,
  MatIconModule,
  MatTableModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatInputModule,
  MatDialogModule,
  MatSlideToggleModule,
];

@NgModule({
  declarations: [
    TableUserComponent,
    ListUserComponent,
    UserComponent,
    CreateUserComponent,
    CountUserComponent,
    ModalUserComponent,
    DataUserComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    UserRoutingModule,
    RouterOutlet,
    ...angularMaterialModules,
  ],
  exports: [UserComponent],
})
export class UserModule {}
