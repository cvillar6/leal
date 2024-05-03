import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { UserModel } from 'src/app/core/models/user.model';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });
    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve users from API', () => {
    const mockUsers: UserModel[] = [
      {
        id: '1',
        name: 'User 1',
        lastName: '',
        points: 0,
        active: false,
      },
      {
        id: '2',
        name: 'User 2',
        lastName: '',
        points: 0,
        active: false,
      },
    ];

    service.getUsers().subscribe((users) => {
      expect(users).toEqual(mockUsers);
    });

    const req = httpTestingController.expectOne(
      `https://leal-api.free.beeceptor.com/api/users`,
    );
    expect(req.request.method).toEqual('GET');
    req.flush(mockUsers);
  });

  it('should add a user via POST request', () => {
    const newUser: UserModel = {
      id: '3',
      name: 'New User',
      lastName: '',
      points: 0,
      active: false,
    };

    service.addUser(newUser).subscribe((user) => {
      expect(user).toEqual(newUser);
    });

    const req = httpTestingController.expectOne(
      `https://leal-api.free.beeceptor.com/api/users`,
    );
    expect(req.request.method).toEqual('POST');
    req.flush(newUser);
  });
});
