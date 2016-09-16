import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';

/**
 * This class represents the lazy loaded LoginComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})

export class LoginComponent implements OnInit {

  private uid:string;

  constructor(public af: AngularFire) {}

  ngOnInit(){
    this.uid = this.af.auth.getAuth().uid ? this.af.auth.getAuth().uid : null;

    console.log(this.af.auth);
    this.af.auth.subscribe(function(auth) {
      console.log(auth);
      if(auth) {
        console.log('logged in');
      } else {
        console.log('not logged in');
      }
    });
  }

  login(){
    this.af.auth.login();
  }

  logAF(){
    console.log(this.af.auth.getAuth())
  }
}
