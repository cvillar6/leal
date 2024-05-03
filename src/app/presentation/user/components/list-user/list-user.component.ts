import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/core/models/user.model';
import { UserRepository } from 'src/app/core/repositories/user.repository';
import { UserDataService } from 'src/app/infrastructure/services/user-data.service';
import { PermissionService } from 'src/app/utils/services/permission.service';
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
    public permissionService: PermissionService
  ) {}

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

  ngOnDestroy(): void {
    this.userDeleted?.unsubscribe();
  }
}
