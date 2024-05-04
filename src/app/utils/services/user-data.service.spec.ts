import { TestBed } from '@angular/core/testing';
import { take } from 'rxjs';
import { UserDataService } from './user-data.service';

describe('UserDataService', () => {
  let service: UserDataService;
  let emitted: boolean;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDataService);
    emitted = false;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit value when refreshUsersData is called', (done) => {
    service.users$.pipe(take(1)).subscribe(() => {
      emitted = true;
      done();
    });

    service.refreshUsersData();

    expect(emitted).toBe(true);
  });
});
