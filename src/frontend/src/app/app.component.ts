import { Component } from '@angular/core';
import { EnvConfigService } from './env-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _envConfigService: EnvConfigService) {
    this._envConfigService.init();
  }
  title = 'ToDoListApp';
}
