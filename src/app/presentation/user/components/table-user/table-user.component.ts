import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserModel } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableUserComponent implements OnChanges {
  SEARCH: string = 'Buscar usuario';
  SEARCH_PLACEHOLDER: string = 'Ingrese el nombre del usuario';
  ID: string = 'Identificación';
  NAME: string = 'Nombres';
  LAST_NAME: string = 'Apellidos';
  POINTS: string = 'Puntos acumulados';
  STATUS: string = 'Estado';

  displayedColumns: string[] = ['id', 'name', 'lastName', 'points', 'active'];
  dataSource!: MatTableDataSource<UserModel>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input() users!: UserModel[];

  ngOnChanges(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
