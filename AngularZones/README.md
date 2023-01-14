# AngularZones

zone.js is a library for running Angular applications in a web browser.
Библиотека zone.js в Angular для запуска приложений в браузере.

Зона — это контекст выполнения (execution context).
зона — это всего навсего механизм, просто имеет такое название, зоны позволяют нам отслеживать вызовы асинхронных функций

Зоны имеют множество вариантов использования, это просто полифил в разных вариантах, его можно использовать в браузере (zone.js/lib/browser), на бекенде вместе с node.js (zone.js/lib/node), вместе с rxjs (zone.js/lib/rxjs).


## API зоны

Zone — это просто глобальный объект у которого есть определенные свойства, давайте взглянем на определение типа:

```typescript
interface Zone {
  /**
   * Родительская зона
   */
  parent: Zone;
  /**
   * Название зоны (используется для дебагинга)
   */
  name: string;
  /**
   * Возвращает значение ассоциированное с ключом
   *
   * Если в свойствах текущей зоны нет такого ключа, то зона будет искать в родителе
   */
  get(key: string): any;
  /**
   * Если у нас несколько зон, то мы можем искать нужную нам зону через ключ,
   * который мы можем определить в `properties`, этот метод работает рекурсивно
   */
  getZoneWith(key: string): Zone;
  /**
   * Используется для создания дочерней зоны
   */
  fork(zoneSpec: ZoneSpec): Zone;
  /**
   * Оборачивает колбек в новую функцию, которая восстановит текущую зону после вызова
   */
  wrap<F extends Function>(callback: F, source: string): F;
  /**
   * Вызывает колбек в нужной зоне
   */
  run<T>(callback: Function, applyThis?: any, applyArgs?: any[], source?: string): T;
  /**
   * Вызывает колбек в нужной зоне в `try-catch`
   */
  runGuarded<T>(callback: Function, applyThis?: any, applyArgs?: any[], source?: string): T;
  /**
   * Вызывает таск в нужной зоне (о тасках позже)
   */
  runTask(task: Task, applyThis?: any, applyArgs?: any[]): any;
  /**
   * Запланировать микротаск
   */
  scheduleMicroTask(
    source: string,
    callback: Function,
    data?: TaskData,
    customSchedule?: (task: Task) => void
  ): MicroTask;
  /**
   * Запланировать макротаск
   */
  scheduleMacroTask(
    source: string,
    callback: Function,
    data?: TaskData,
    customSchedule?: (task: Task) => void,
    customCancel?: (task: Task) => void
  ): MacroTask;
  /**
   * Запланировать событийный таск
   */
  scheduleEventTask(
    source: string,
    callback: Function,
    data?: TaskData,
    customSchedule?: (task: Task) => void,
    customCancel?: (task: Task) => void
  ): EventTask;
  /**
   * Запланировать существующий таск
   */
  scheduleTask<T extends Task>(task: T): T;
  /**
   * Позволяет зоне перехватить таск, который отменили
   */
  cancelTask(task: Task): any;
}
```

parent — у каждой зоны есть свой родитель, который создал эту дочернюю зону. У самой верхней зоны нет родителя, если мы выведем в консоль Zone.current.parent, то получим null.

name — название зоны, вы можете задать любую строку и это обязательный параметр.

fork — создает дочернюю зону, на самом деле копирует родительскую, скопированная зона становится потомком.

run и runGuarded— то, что позволяет нам запустить любую асинхронную задачу(setTimeout || setInterval || Promise….) в нужной нам зоне.


## Создание зоны



## Цель зон

Главная цель использования zonejs в angular -  знать, когда рендерить.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
