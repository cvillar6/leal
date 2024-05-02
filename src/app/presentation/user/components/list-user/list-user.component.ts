import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/core/models/user.model';
import { UserRepository } from 'src/app/core/repositories/user.repository';
import { UserDataService } from 'src/app/infrastructure/services/user-data.service';

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
    private userRepository: UserRepository,
    private userDataService: UserDataService
  ) {}

  deleteUser(userId: string | undefined): void {
    this.userDeleted = this.userRepository
      .deleteUser(userId ?? '')
      .subscribe(() => this.userDataService.refreshUsersData());
  }

  ngOnDestroy(): void {
    this.userDeleted?.unsubscribe();
  }
}
