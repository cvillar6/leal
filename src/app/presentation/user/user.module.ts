import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { CountUserComponent } from './components/count-user/count-user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { TableUserComponent } from './components/table-user/table-user.component';
import { UserComponent } from './components/user/user.component';

const angularMaterialModules = [MatExpansionModule, MatIconModule];

@NgModule({
  declarations: [
    TableUserComponent,
    ListUserComponent,
    UserComponent,
    CreateUserComponent,
    CountUserComponent,
  ],
  imports: [CommonModule, ...angularMaterialModules],
  exports: [UserComponent],
})
export class UserModule {}
