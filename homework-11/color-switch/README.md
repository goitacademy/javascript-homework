# Переключатель цветов

Есть массив цветов в hex-формате и кнопки `Start` и `Stop`.

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

Напиши скрипт, который после нажатия кнопки `Start`, раз в секунду меняет цвет
фона `body` на случайное значение из массива используя инлайн-стиль. При нажатии
на кнопку `Stop`, изменение цвета фона должно останавливаться.

> ⚠️ Учти, на кнопку `Start` можно нажать бесконечное количество раз. Сделай
> так, чтобы пока изменение темы запушено, кнопка `Start` была не активна.

Для генерации случайного числа (индекс элемента массива цветов), используй
функцию `randomIntegerFromInterval`.

```js
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
```
