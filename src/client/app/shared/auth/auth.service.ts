import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class AuthService {

  /**
   * Creates a new AuthService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private af: AngularFire) {}

  get() {
    return this.af.auth.getAuth();
  }

  logIn() {
    this.af.auth.login();
  }
}

