**Read in other languages: [Русский](README.md), [Українська](README.ua.md),
[English](README.en.md), [Español](README.es.md), [Polski](README.pl.md).**

# Kryteria przyjęcia

- Utworzono repozytorium `goit-js-hw-06`.
- Przy oddaniu pracy domowej dołączono linki: do plików źródłowych i strony 
  roboczej na `GitHub Pages`.
- Zadania wykonano zgodnie z zakresem zadań (nie wolno zmieniać kodu źródłowego HTML zadania).
- Wiersz poleceń nie zawiera błędów i ostrzeżeń.
- Nazwy zmiennych i funkcji są zrozumiałe, opisowe.
- Kod sformatowano `Prettier`.

## Pliki startowe

W [folderze src](./src) znajdziesz pliki startowe z gotowym znacznikiem i 
połączonymi plikami skryptów do każdego zadania. Skopiuj je do swojego projektu.
Aby to zrobić, pobierz całe repozytorium jako archiwum lub użyj
[serwisu DownGit](https://downgit.github.io/) aby pobrać oddzielny folder z repozytorium.

## Zadanie 1

W HTML znajduje się lista kategorii `ul#categories`.

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

Napisz skrypt, który:

1. Policzy i wprowadzi do wiersza poleceń liczbę kategorii w `ul#categories`, czyli
   elementy `li.item`.
2. Dla każdego elementu `li.item` na liście `ul#categories`, znajdzie i wprowadzi do
   wiersza poleceń tekst nagłówka elementu (tag `<h2>`) i liczbę elementów w
   kategorii (wszystkich `<li>`).

W konsekwencji, w wierszu poleceń znajdą się takie komunikaty.

```bash
Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
```

## Zadanie 2

W HTML znajduje się pusta lista `ul#ingredients`.

```html
<ul id="ingredients"></ul>
```

W JavaScript znajduje się tablica ciągów.

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

Napisz skrypt, który dla każdego elementu tablicy `ingredients`:

1. Utworzy oddzielny element `<li>`. Koniecznie użyj metody
   `document.createElement()`.
2. Doda nazwę elementu jako jego zawartość tekstową.
3. Doda do elementu klasę `item`.
4. Po czym umieści wszystkie `<li>` na liście podczas jednej operacji `ul.ingredients`.

## Zadanie 3

Napisz skrypt do tworzenia galerii obrazów według tablicy danych. W HTML znajduje się
lista `ul.gallery`.

```html
<ul class="gallery"></ul>
```

Użyj tablicy obiektów `images` w celu utworzenia elementów `<img>` umieszczonych w
`<li>`. Aby utworzyć znacznik użyj łańcuchów szablonowych i metody
`insertAdjacentHTML()`.

- Wszystkie elementy galerii powinny być dodawane do DOM podczas jednej operacji.
- Ulepsz galerię używając flexboxów lub gridów poprzez 
  klasy CSS.

```js
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
```

## Zadanie 4

Licznik składa się ze spana i przycisków, które, po kliknięciu, powinny zwiększać i 
zmniejszać jego wartość na jednostkę.

```html
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
```

- Utwórz zmienną `counterValue` w której będzie przechowywana aktualna wartość
  licznika i inicjalizuj wartość `0`.
- Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай
  значение счтетчика.
- Обновляй интерфейс новым значением переменной `counterValue`.

## Задание 5

Напиши скрипт который, при наборе текста в инпуте `input#name-input` (событие
`input`), подставляет его текущее значение в `span#name-output`. Если инпут
пустой, в спане должна отображаться строка `"Anonymous"`.

```html
<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
```

## Задание 6

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

## Задание 7

Напиши скрипт, который реагирует на изменение значения `input#font-size-control`
(событие `input`) и изменяет инлайн-стиль `span#text` обновляя свойство
`font-size`. В результате при перетаскивании ползунка будет меняться размер
текста.

```html
<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>
```

## Задание 8

Напиши скрипт управления формой логина.

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
4. Если пользователь заполнил все поля и отправил форму, собери значения полей в
   обьект, где имя поля будет именем свойства, а значение поля - значением
   свойства. Для доступа к элементам формы используй свойство `elements`.
5. Выведи обьект с введенными данными в консоль и очисти значения полей формы
   методом `reset`.

## Задание 9

Напиши скрипт, который изменяет цвета фона элемента `<body>` через инлайн стиль
при клике на `button.change-color` и выводит значение цвета в `span.color`.

```html
<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
```

Для генерации случайного цвета используй функцию `getRandomHexColor`.

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
```

## Задание 10 (выполнять не обязательно)

Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит
количество элементов в `input` и нажимает кнопку `Создать`, после чего
рендерится коллекция. При нажатии на кнопку `Очистить`, коллекция элементов
очищается.

```html
<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
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
