import {Component, Inject} from '@angular/core';
import {Router} from "@angular/router";
import {KEK} from "./token";
import {UserActionService} from "./user-action.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDI';

  constructor(@Inject(KEK) public kek: string , service: UserActionService) { }

}
