import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserModel } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListUserComponent {
  ID: string = 'Identificación';
  NAME: string = 'Nombres';
  LAST_NAME: string = 'Apellidos';
  POINTS: string = 'Puntos acumulados';

  EDIT: string = 'Editar';
  REMOVE: string = 'Eliminar';

  @Input() users!: UserModel[];
}
