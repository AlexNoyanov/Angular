import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zone-test',
  templateUrl: './zone-test.component.html',
  styleUrls: ['./zone-test.component.css']
})
export class ZoneTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const myFirstZone = Zone.current.fork({name: 'myFirstZone'});
    // console.log(myFirstZone.name);
    // console.log(myFirstZone.parent === Zone.current);

      // Пример использования зоны в коде компонента
      // monkeyPatch() для JS
    // const oldSetTimeout = setTimeout;
    // setTimeout = (hadler, timer)=>{
    //   // Переопределяем setTimeout
    //   console.log('START')
    //   oldSetTimeout(_=>{
    //     handler;
    //     console.log('END')
    //   }, timer)
    // }

    // Асинхронное событие:
// setTimeout(_=>{
//   console.log('Some Async Action');
// })

    const myFirstZone = Zone.current.fork({
      name: 'моя первая зона',
      onInvoke(parentZoneDelegate, _, targetZone, delegate, applyThis, applyArgs, source) {
        console.log('мы где-то вызвали метод `run`');
        return parentZoneDelegate.invoke(targetZone, delegate, applyThis, applyArgs, source);
      }
    });

    myFirstZone.run(() => {
      console.log('привет из колбека');
    });
  }

}
