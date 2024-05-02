import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/core/models/user.model';
import { UserRepository } from 'src/app/core/repositories/user.repository';
import { UserDataService } from 'src/app/infrastructure/services/user-data.service';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.sass'],
})
export class TableUserComponent implements OnInit, AfterViewInit {
  SEARCH: string = 'Buscar usuario';
  SEARCH_PLACEHOLDER: string = 'Ingrese el nombre del usuario';
  ID: string = 'Identificación';
  NAME: string = 'Nombres';
  LAST_NAME: string = 'Apellidos';
  POINTS: string = 'Puntos acumulados';
  STATUS: string = 'Estado';

  displayedColumns: string[] = ['id', 'name', 'lastName', 'points', 'active'];
  dataSource!: MatTableDataSource<UserModel>;

  private usersSubscription!: Subscription;
  private refreshUsersSubscription!: Subscription;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private userRepository: UserRepository,
    private userDataService: UserDataService
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.refreshUsersSubscription = this.userDataService.users$.subscribe(
      () => {
        this.getUsers();
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getUsers(): void {
    this.usersSubscription = this.userRepository
      .getUsers()
      .subscribe(
        (users: UserModel[]) =>
          (this.dataSource = new MatTableDataSource(users))
      );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy(): void {
    this.usersSubscription?.unsubscribe();
    this.refreshUsersSubscription?.unsubscribe();
  }
}
