# Angular DI Lesson

Video: https://www.youtube.com/watch?v=fALKYP8voBQ
****
## DI consist of

1. Provider - Место, где описана зависимость
2. Injector -  Механизм внутри Angular, который помогает найти и добавить зависимость 
3. Dependancy - Сама зависимость (класс или что-то ещё что добавляем)
****
##  Provider
Определяется в модуле объектом, в котором задаём два параметра:

 - Ключ по которому зависимость определена
 - Рецепт как Ангуляр будет создавать зависимость

`@NgModule({
...
providers: [{token,recipe}],
...
})`

Способы задания ключа:

- `useClass` - Для классов
  `providers:[{provide:UserService,useClass: UserService}],`


- `useValue` - Для константы токена
  `{provide: API_URL, useValue:TOKEN},`


- `useFactory` - Когда самим нужно определять конструктор класса, есть логика для возвращения разных сущностей
`{provide: userService, useFactory: function(){return userService}, deps: ['userService'],`


- `useExisting` - Использовать по ключу другого класса (Например ограниченный функционал существуюшего)

Провайдеры могут задаваться на разных уровнях:
  
- Уровень модуля @NgModule
- Уровень компонента @Component в providers: [{...}]
****
## Injector
Сущность Ангуляра которая находит и дорбавляет зависимости
`const injector: Injector = ReflectiveInjector.resolveAndCreate([{provide:UserService,useClass: UserService},])`

Тогда получить зависимость можно так: `const userService = injector.get(UserService)`
****
## Dependancy
- Класс или что-то ещё что добавляем
- Ключ по которому зависимость определена
- Рецепт как Ангуляр будет создавать зависимость
****
## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
