import {Component, Inject, OnInit} from '@angular/core';
import {KEK} from "../token";
import {UserActionService} from "../user-action.service";

@Component({
  selector: 'app-a-component',
  templateUrl: './a-component.component.html',
  styleUrls: ['./a-component.component.css']
})
export class AComponentComponent implements OnInit {

  constructor(@Inject(KEK) public kek: string, service: UserActionService) { }

  ngOnInit(): void {

  }
}
