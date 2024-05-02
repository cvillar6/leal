import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { UserModel } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-data-user',
  templateUrl: './data-user.component.html',
  styleUrls: ['./data-user.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataUserComponent implements OnChanges {
  USERS: string = 'Número de usuarios';
  ACTIVE: string = 'Usuarios activos';
  DEACTIVATE: string = 'Usuarios inactivos';

  @Input() users!: UserModel[];

  numberOfUsers: number = 0;
  activeUsers: number = 0;
  deactivateUsers: number = 0;

  ngOnChanges(): void {
    this.getUsers();
    this.getActiveUsers();
    this.getDeactiveUsers();
  }

  getUsers(): void {
    this.numberOfUsers = this.users?.length;
  }

  getActiveUsers(): void {
    this.activeUsers = this.users?.filter(
      (user: UserModel) => user.active
    )?.length;
  }

  getDeactiveUsers(): void {
    this.deactivateUsers = this.users?.filter(
      (user: UserModel) => !user.active
    )?.length;
  }
}
