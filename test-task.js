1.  // Требуется написать функцию, принимающую на вход массив чисел произвольной длины.
   // Функция должна возвращать массив неуникальных чисел (которые встречаются в исходном массиве более 1 раза).
  // Например, для входного значения [1, 2, 3, 1, 2, 5, 1] должно вернуться значение [1, 2].

   const arraySort = (arr) => {
    const uniqueNums = new Set(arr);
    uniqueNums.forEach(num => {
      const index = arr.indexOf(num);
      arr.splice(index, 1);
    })
    const newArr = Array.from(new Set(arr));
    return newArr;
   }

2.  //Требуется написать функцию, принимающую на вход строку.
   // Функция должна возвращать true, если входная строка является валидной датой в формате "дд.мм.гггг", и false в противном случае.
  // Не использовать сторонние библиотеки (Moment.js и т.п.)

  const isDate = (input) => {
    const dateComponents = input.split('.').reverse();
    const year = parseInt(dateComponents[0]);
    const month = parseInt(dateComponents[1]) - 1;
    const day = parseInt(dateComponents[2]);
    const date = new Date(dateComponents.join('/'));
    return year === date.getFullYear() && month === date.getMonth() && day === date.getDate();
  }

3. //Некоторая js-функция myFunc принимает три входных параметра. Необходимо вызвать данную функцию через 1000мс (используя setTimeout),
  // обеспечив передачу в нее трех параметров (значения параметров известны на момент вызова setTimeout).

  const myFunc = (arg1, agr2, agr3) => {
    // do something
  }

  const param1 = 1;
  const param2 = 2;
  const param3 = 3;

  setTimeout(() => myFunc(param1, param2, param3), 1000)


4. // Angular-компонент получает на вход какое-то значение от родительского компонента:
  // <myComponent [param]="parentValue" />
 // При изменении значения parentValue компонент myComponent должен выполнить какое-либо действие (например, ajax-запрос).
// Как реализовать это поведение внутри компонента myComponent?

export class myComponent implements OnChanges {
    @Input() declare param: string;

    ngOnChanges(changes: SimpleChanges): void {
        if (!changes['param'].firstChange) {
            //do something
        }
    }
}

5. // Один из сервисов Angular-приложения используется несколькими компонентами.
  // Опишите, в каких случаях при работе приложения будет создан один экземпляр сервиса, а в каких несколько (что влияет на количество экземпляров сервиса)?

`Один экземпляр сервиса будет создан в случае:
- если сервис определен на уровне приложения;
- если сервис определен на уровне модуля и этот модуль импортируется в AppModule

Несколько экземпляров сервиса будут созданы в случае:
- если сервис определен на уровне компонента
- при ассинхронной загрузке модулей`

6. // Требуется создать Angular-директиву imgFallback, которая проверяет успешную загрузку изображения и в случае ошибки загрузки
  // подставляет изображение-заглушку (url заглушки фиксированный, не зависит от исходного url изображения).
 // Сценарий использования директивы:
// <img src="https://....img url....png" imgFallback />

import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[imgFallback]',
})
export class ImgFallback {
    img: HTMLImageElement;
    url = 'заглушка';

    constructor(private el: ElementRef) {
    this.img = el.nativeElement;
}


ngOnInit() {
    this.img.onerror = () => {
        this.img.src = this.url;
    };
}
}


7. // Представьте ситуацию: при локальном запуске Angular-приложения (в тестовом режиме) не работает авторизация
  // (авторизация выполняется через REST API, сессии пользователей устанавливаются сервером в cookie).
 // Сервер API используется тот же, что и в production среде. Сетевые проблемы исключены, ответы сервера также не меняются при работе с dev-приложением.
// В чем может быть причина данной проблемы (перечислите все подходящие варианты)?

` Причину нужно искать во вкладке Сеть в инструментах разработчика или посмотреть инфо об ошибке в консоли браузера:
Могу предположить, что проблема может возникнуть из-за несовпадения заголовка referer и 
доменного адреса (так как при локальном запуске доменное имя будет localhost), также запросы могут блокироваться браузерной кросс-доменной политикой CORS
`


