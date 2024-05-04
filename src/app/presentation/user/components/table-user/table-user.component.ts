import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import 'leal-components';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/core/models/user.model';
import { UserRepository } from 'src/app/core/repositories/user.repository';
import { UserDataService } from 'src/app/utils/services/user-data.service';
import { PermissionService } from 'src/app/utils/services/permission.service';
import { ModalUserComponent } from '../modal-user/modal-user.component';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableUserComponent implements OnChanges, OnDestroy {
  SEARCH: string = 'Buscar usuario';
  SEARCH_PLACEHOLDER: string = 'Ingrese el nombre del usuario';
  ID: string = 'Identificación';
  NAME: string = 'Nombre';
  POINTS: string = 'Puntos acumulados';
  STATUS: string = 'Estado';
  ACTIONS: string = 'Acciones';

  EDIT: string = 'Editar';
  REMOVE: string = 'Eliminar';

  displayedColumns: string[] = this.permissionService.isAdmin()
    ? ['id', 'fullName', 'points', 'active', 'actions']
    : ['id', 'fullName', 'points', 'active'];

  dataSource!: MatTableDataSource<UserModel>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input() users!: UserModel[];

  private userDeleted!: Subscription;

  constructor(
    public dialog: MatDialog,
    private userRepository: UserRepository,
    private userDataService: UserDataService,
    public permissionService: PermissionService,
  ) {}

  ngOnChanges(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.dataSource = new MatTableDataSource(this.users);
  }

  deleteUser(userId: string | undefined): void {
    this.userDeleted = this.userRepository
      .deleteUser(userId ?? '')
      .subscribe(() => this.userDataService.refreshUsersData());
  }

  updateUser(user: UserModel) {
    this.dialog.open(ModalUserComponent, {
      data: user,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy(): void {
    this.userDeleted?.unsubscribe();
  }
}
