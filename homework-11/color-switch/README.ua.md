# Перемикач кольорів

Є масив кольорів в hex-форматі і кнопки `Start` і `Stop`.

```html
<button type="button" data-action="start">Start</button>
<button type="button" data-action="stop">Stop</button>
```

```js
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
```

Напиши скрипт, який після натискання кнопки `Start`, раз в секунду змінює колір
фону `body` на випадкове значення з масиву використовуючи інлайн-стиль. При натисканні на кнопку `Stop`, зміна кольору фону повинна зупинятися.

> ⚠️ Врахуй, на кнопку `Start` можна натиснути нескінченну кількість разів. Зроби
> так, щоб поки зміна теми запушено, кнопка `Start` була не активна.

Для генерації випадкового числа (індекс елемента масиву квітів), використовуй
функцію `randomIntegerFromInterval`.

```js
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
```
