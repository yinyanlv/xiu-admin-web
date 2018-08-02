import {Injectable} from '@angular/core';

@Injectable()
export class GlobalStateService {

  constructor() {
  }

  get isLoggedIn() {

    return !!this.user.username;
  }

  get user() {

    return JSON.parse(localStorage.getItem('user')) || {};
  }

  set user(user: any) {

    localStorage.setItem('user', JSON.stringify(user));
  }
}
