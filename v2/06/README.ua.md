**Читать на других языках: [Русский](README.md), [Українська](README.ua.md).**

# Критерії прийому

- Створено репозиторій `goit-js-hw-06`
- При здачі домашньої роботи є два посилання: на вихідні файли і робочу сторінку
  на GitHub pages
- Задание выполнено строго по ТЗ, то есть нельзя изменять разметку и стили.
- При відвідуванні робочої сторінки (GitHub pages) завдання, в консолі немає
  помилок і попереджень
- Імена змінних та функцій зрозумілі, описові
- Код відформатований за допомогою Prettier

## Стартові файли

В папці [src](./src) ти знайдеш стартові файли проєкту з базовою розміткою і
підключеними файлами скриптів для кожного завдання.

## Завдання 1

В HTML є список категорій `ul#categories`.

```html
<ul id="categories">
  <li class="item">
    <h2>Animals</h2>

    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>

    <ul>
      <li>Bread</li>
      <li>Prasley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>

    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>
```

Напиши скрипт который:

1. Посчитает и выведет в консоль количество категорий в `ul#categories`, то есть
   элементов `li.item`.
2. Для каждого элемента `li.item` в списке `ul#categories`, найдет и выведет в
   консоль текст заголовка элемента (тега `<h2>`) и количество элементов в
   категории (всех вложенных в него `<li>`).

В результате, в консоли будут выведены такие сообщения:

```bash
Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
```

## Завдання 2

В HTML є пустий список `ul#ingredients`.

```html
<ul id="ingredients"></ul>
```

В JS є масив рядків.

```js
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
```

Напиши скрипт, который для каждого элемента массива `ingredients`:

1. Создаст отдельный элемент `<li>`
2. Добавит название ингридиента как его текстовое содержимое
3. Добавит элементу класс `item`

После чего вставит все `<li>` за одну операцию в список `ul.ingredients`. Для
создания DOM-элементов обзательно используй метод `document.createElement()`.

## Завдання 3

Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть
список `ul#gallery`.

```html
<ul id="gallery"></ul>
```

Используй массив объектов `images` для создания тегов `<img>` вложенных в
`<li>`. Для создания разметки используй шаблонные строки и метод
`insertAdjacentHTML()`.

- Все элементы галереи должны добавляться в DOM за одну операцию вставки.
- Добавь минимальное оформление галереи флексбоксами или гридами через
  css-классы.

```js
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
```

## Завдання 4

Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати
значення лічильника на `1`.

```html
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
```

- Створи змінну `counterValue` в якій буде зберігається поточне значення
  лічильника.
- Створи функції `increment` і `decrement` для збільшення і зменшення значення
  лічильника.
- Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу

## Завдання 5

Напиши скрипт который, при наборе текста в инпуте `input#name-input` (событие
`input`), подставляет его текущее значение в `span#name-output`. Если инпут
пустой, в спане должна отображаться строка `'Anonymous'`.

```html
<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
```

## Завдання 6

Напиши скрипт, который при потере фокуса на инпуте (событие `blur`), проверяет
его содержимое на правильное количество введённых символов.

```html
<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>
```

- Сколько символов должно быть в инпуте, указывается в его атрибуте
  `data-length`.
- Если введено подходящее количество символов, то `border` инпута становится
  зелёным, если неправильное - красным.

Для добавления стилей, используй CSS-классы `valid` и `invalid`, которые мы уже
добавили в исходные файлы задания.

```css
#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
```

## Завдання 7

Напиши скрипт, який реагує на зміну значення `input#font-size-control` (подія
`input`) і змінює інлайн-стиль `span#text` оновлюючи властивість `font-size`. В
результаті при перетягуванні повзунка змінюватиметься розмір тексту.

```html
<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>
```

## Задание 8

Напиши скрипт управления формой входа.

```html
<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>
```

1. Обработка отправки формы `form.login-form` должна быть по событию `submit`.
2. При отправке формы страница не должна перезагружаться.
3. Если в форме есть незаполненные поля, выводи `alert` с предупреждением о том,
   что все поля должны быть заполнены.
4. Если пользотель заполнил все поля и отправил форму, собери значения полей в
   обьект, где имя поля будет именем свойства, а значение поля - значением
   свойства. Для доступа к элементам формы используй свойство `elements`.
5. Выведи обьект с введенными данными в консоль и очисти значения полей формы
   методом `reset`.

## Завдання 9

Напиши скрипт, который изменяет цвета фона элемента `<body>` через инлайн стиль
при клике на `button.js-change-color` и выводит значение цвета в
`span.js-color`.

```html
<div class="widget">
  <p>Background color: <span class="js-color">-</span></p>
  <button type="button" class="js-change-color">Change color</button>
</div>
```

Для генерации случайного цвета используй функцию `getRandomHexColor`.

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
```

## Завдання 10 (виконувати не обов'язково)

Напиши скрипт створення і очищення колекції елементів. Користувач вводить
кількість елементів в `input` і натискає кнопку `Створити`, після чого
рендериться колекція. При натисканні на кнопку `Очистити`, колекція елементів
очищається.

```html
<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-action="create">Create</button>
  <button type="button" data-action="destroy">Destroy</button>
</div>

<div id="boxes"></div>
```

Создай функцию `createBoxes(amount)`, которая принимает один параметр - число.
Функция создает столько `<div>`, сколько указано в `amount` и добавляет их в
`div#boxes`.

1. Размеры самого первого `<div>` - 30px на 30px.
2. Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
3. Все элементы должены иметь случайный цвет фона в формате HEX. Используй
   готовую функцию `getRandomHexColor` для получения цвета.

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
```

Создай функцию `destroyBoxes()`, которая очищает содержимое `div#boxes`, тем
самым удаляя все созданные элементы.
