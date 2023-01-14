import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-b-component',
  templateUrl: './b-component.component.html',
  styleUrls: ['./b-component.component.css'],
  encapsulation: ViewEncapsulation.None //Данный тип отключает инкапсуляцию у компонента.
  // На элементы не вешаются атрибуты, к селекторам не добавляются атрибуты.
})
export class BComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
