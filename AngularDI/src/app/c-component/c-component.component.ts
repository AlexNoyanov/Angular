import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-c-component',
  templateUrl: './c-component.component.html',
  styleUrls: ['./c-component.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom //Данный тип изолирует стили компонента от остальных путем добавления к селекторам стилей уникального атрибута компонента.
})
export class CComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
