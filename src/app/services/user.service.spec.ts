import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a user', function () {
    let testUser = 'TestUser';

    service.addUser(testUser);
    service.users$.subscribe(users => {
      expect(users).toContain(testUser);
    })
  });

  it('should delete a user', function () {
    let testUser = 'Alice';

    service.deleteUser(testUser);
    service.users$.subscribe(users => {
      expect(users).not.toContain(testUser);
    })
  });

  it('should update a userName', function () {
    let testUser = 'TestUser';

    service.updateUser('Bob',testUser);
    service.users$.subscribe(users => {
      expect(users).toContain(testUser);
    })
  });
});
