import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import 'leal-components';
import { Subscription, take } from 'rxjs';
import { UserModel } from 'src/app/core/models/user.model';
import { UserRepository } from 'src/app/core/repositories/user.repository';
import { PermissionService } from 'src/app/utils/services/permission.service';
import { UserDataService } from 'src/app/utils/services/user-data.service';
import { AlertUserComponent } from '../alert-user/alert-user.component';
import { ModalUserComponent } from '../modal-user/modal-user.component';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListUserComponent implements OnDestroy {
  ID: string = 'Identificación';
  NAME: string = 'Nombres';
  LAST_NAME: string = 'Apellidos';
  POINTS: string = 'Puntos acumulados';

  EDIT: string = 'Editar';
  REMOVE: string = 'Eliminar';

  @Input() users!: UserModel[];

  private userDeleted!: Subscription;

  constructor(
    public dialog: MatDialog,
    private userRepository: UserRepository,
    private userDataService: UserDataService,
    public permissionService: PermissionService,
    private _snackBar: MatSnackBar,
  ) {}

  deleteUser(userId: string | undefined): void {
    this.userDeleted = this.userRepository
      .deleteUser(userId ?? '')
      .subscribe(() => {
        this.userDataService.refreshUsersData();
        this._snackBar.openFromComponent(AlertUserComponent, {
          duration: 5000,
          data: {
            title: 'Usuario eliminado',
          },
        });
      });
  }

  updateUser(user: UserModel) {
    this.dialog
      .open(ModalUserComponent, {
        data: user,
      })
      .afterClosed()
      .pipe(take(1))
      .subscribe(() =>
        this._snackBar.openFromComponent(AlertUserComponent, {
          duration: 5000,
          data: {
            title: 'Usuario actualizado',
          },
        }),
      );
  }

  ngOnDestroy(): void {
    this.userDeleted?.unsubscribe();
  }
}
