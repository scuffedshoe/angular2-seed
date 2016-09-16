import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Config} from './shared/index';
import { AuthService } from './shared/index';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
})

export class AppComponent {
  constructor(af:AngularFire, AuthService) {
    console.log('Environment config', Config);
    console.log('AngularFire ', AngularFire);
    console.log(AuthService.get());
  }
}
