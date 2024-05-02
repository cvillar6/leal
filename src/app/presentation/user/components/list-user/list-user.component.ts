import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/core/models/user.model';
import { UserRepository } from 'src/app/core/repositories/user.repository';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.sass'],
})
export class ListUserComponent implements OnInit {
  ID: string = 'Identificación';
  NAME: string = 'Nombres';
  LAST_NAME: string = 'Apellidos';
  POINTS: string = 'Puntos acumulados';

  users: UserModel[] = [];

  constructor(private userRepository: UserRepository) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(): void {
    // this.userRepository.getUsers().subscribe();
  }
}
