import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';
import { NameListService } from '../shared/name-list/index';
import { AngularFire } from 'angularfire2';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [NameListService]
})
export class LoginModule { }
