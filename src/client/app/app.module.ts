import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import {
  AngularFireModule,
  _getAuthBackend,
  AuthMethods,
  AuthProviders
} from 'angularfire2';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';

const firebaseConfig = {
  apiKey: "AIzaSyCrbYVHp0XLCdJUQ7LlyG_FO-LzF_lxh5Y",
  authDomain: "angular2test-dc19c.firebaseapp.com",
  databaseURL: "https://angular2test-dc19c.firebaseio.com",
  storageBucket: "angular2test-dc19c.appspot.com",
  messagingSenderId: "949246842925"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  imports: [AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig), BrowserModule, HttpModule, RouterModule.forRoot(routes), AboutModule, HomeModule, LoginModule, SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})

export class AppModule { }
