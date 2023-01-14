import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {KEK} from "../token";
import {UserActionService} from "../user-action.service";

@Component({
  selector: 'app-a-component',
  templateUrl: './a-component.component.html',
  styleUrls: ['./a-component.component.css'],
  encapsulation: ViewEncapsulation.Emulated //Данный тип изолирует стили компонента от остальных путем добавления к селекторам стилей уникального атрибута компонента.
  // Соответствующий атрибут добавляется ко всем элементам компонента.
})
export class AComponentComponent implements OnInit {

  constructor(@Inject(KEK) public kek: string, service: UserActionService) { }

  ngOnInit(): void {

  }
}
