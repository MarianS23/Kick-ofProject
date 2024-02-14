import { TestBed } from '@angular/core/testing';
import { StateServiceService } from './state-service.service';
import { NgxsModule } from '@ngxs/store';
import { UserState } from 'src/app/state/user.state';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user.interface';

describe('StateServiceService', () => {
  let service: StateServiceService;
  let store: Store;
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([UserState])
      ]
    });
    service = TestBed.inject(StateServiceService);
    store = TestBed.inject(Store)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get user from state', () => {
    let data = {
      "value": {
        firstName: "edit",
        lastName: "edit",
        userImg: "edit",
        position: "edit",
        birthDate: "edit",
        aboutYou: "edit",
      }
    }

    let response = {
      firstName: "edit",
      lastName: "edit",
      userImg: "edit",
      position: "edit",
      birthDate: "edit",
      aboutYou: "edit",
    }
    service.addUser(data)
    let getUser = ():Object => {
      let userData =  store.selectSnapshot(state => state.user.user[0])
      return userData
    }
    expect(getUser()).toEqual(response);
  });

  it('should add data to state', () => {
    let data = {
      "value": {
        firstName: "edit",
        lastName: "edit",
        userImg: "edit",
        position: "edit",
        birthDate: "edit",
        aboutYou: "edit",
      }
    }
    let response = {
      firstName: "edit",
      lastName: "edit",
      userImg: "edit",
      position: "edit",
      birthDate: "edit",
      aboutYou: "edit",
    }
    service.addUser(data)
    const userData = store.selectSnapshot(state => state.user.user[0]);
    expect(userData).toEqual(response)
  })

  it('should not add empty object', () => {
    let data = {
      "value": {
        firstName: null,
        lastName: null,
        userImg: null,
        position: null,
        birthDate: null,
        aboutYou: null,
      }
    }
    service.addUser(data)
    expect(service.addUser(data)).toBe(false)
  })

  it('should remove object from state', () => {
    let data = {
      "value": {
        firstName: "edit",
        lastName: "edit",
        userImg: "edit",
        position: "edit",
        birthDate: "edit",
        aboutYou: "edit",
      }
    }
    service.deleteUser(data.value.firstName)
    const userData = store.selectSnapshot(state => state.user.user[0]);
    expect(userData).toBe(undefined)
  })

});
