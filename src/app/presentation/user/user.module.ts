import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { RouterOutlet } from '@angular/router';
import { AlertUserComponent } from './components/alert-user/alert-user.component';
import { CountUserComponent } from './components/count-user/count-user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DataUserComponent } from './components/data-user/data-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { ModalUserComponent } from './components/modal-user/modal-user.component';
import { TableUserComponent } from './components/table-user/table-user.component';
import { UserComponent } from './components/user/user.component';
import { UserRoutingModule } from './user-routing.module';

const angularMaterialModules = [
  MatExpansionModule,
  MatIconModule,
  MatTableModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatInputModule,
  MatDialogModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
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
    AlertUserComponent,
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserModule {}
