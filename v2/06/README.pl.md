**Read in other languages: [Русский](README.md), [Українська](README.ua.md),
[English](README.en.md), [Español](README.es.md), [Polski](README.pl.md).**

# Kryteria przyjęcia

- Utworzono repozytorium `goit-js-hw-06`.
- Przy oddaniu pracy domowej dołączono linki: do plików źródłowych i strony 
  roboczej na `GitHub Pages`.
- Zadania wykonano zgodnie z zakresem zadań (nie wolno zmieniać kodu źródłowego HTML zadania).
- Wiersz poleceń nie zawiera błędów i ostrzeżeń.
- Nazwy zmiennych i funkcji są zrozumiałe, opisowe.
- Sformatowano kod `Prettier`.

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

Licznik składa się ze spana i przycisków, które, po ich kliknięciu, powinny zwiększać i 
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
- Dodaj click listeners do przycisków, wewnątrz których zwiększaj i zmniejszaj
  wartość licznika.
- Aktualizuj interfejs nową wartością zmiennej `counterValue`.

## Zadanie 5

Napisz skrypt, który przy wpisywaniu tekstu w polu input `input#name-input` (zdarzenie
`input`) wstawia jego aktualną wartość do `span#name-output`. Jeśli pole input jest
puste, w spanie powinien wyświetlić się komunikat `"Anonymous"`.

```html
<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
```

## Zadanie 6

Napisz skrypt, który przy utracie fokusu na polu input (zdarzenie `blur`) sprawdza
jego zawartość na prawidłową liczbę wprowadzonych symboli.

```html
<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>
```

- Informacja o liczbie symboli, która powinna znajdować się w polu input, pokazuje się w jego atrybucie
  `data-length`.
- Jeśli wprowadzono odpowiednią liczbę symboli, to `border` pola input staje się
  zielone, a jeśli liczba jest nieprawidłowa - czerwone.

Aby dodać style, używaj klas CSS `valid` i `invalid`, które już
dodaliśmy do plików źródłowych zadania.

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

## Zadanie 7

Napisz skrypt, który reaguje na zmianę wartości `input#font-size-control`
(zdarzenie `input`) i zmienia styl inline `span#text` aktualizując właściwość
`font-size`. W rezultacie, podczas przeciągania paska przesuwania będzie zmieniał się rozmiar
tekstu.

```html
<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>
```

## Zadanie 8

Napisz skrypt zarządzania formularzem logowania.

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

1. Opracowanie przesyłania formularza `form.login-form` powinno przebiegać zgodnie ze zdarzeniem `submit`.
2. Podczas przesyłania formularza strona nie powinna się restartować.
3. Jeśli w formularzu są nieuzupełnione pola, wprowadź `alert` z upomnieniem o tym,
   że wszystkie pola powinny zostać wypełnione.
4. Jeśli użytkownik uzupełnił wszystkie pola i wysłał formularz, zbierz wartość pól jako
   obiekt, gdzie nazwa pola będzie nazwą właściwości, a wartość pola - wartością
   właściwości. Aby otrzymać dostęp do elementów formularza użyj właściwości `elements`.
5. Umieść obiekt z wprowadzonymi danymi do wiersza poleceń i wyczyść wartości pól formularza
   metodą `reset`.

## Zadanie 9

Napisz skrypt, który zmienia kolor tła elementu `<body>` poprzez style inline
po kliknięciu na `button.change-color` i wprowadza wartość koloru do `span.color`.

```html
<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
```

Aby wygenerować losowy kolor użyj funkcji `getRandomHexColor`.

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
```

## Zadanie 10 (nieobowiązkowe)

Napisz skrypt tworzenia i usuwania kolekcji elementów. Użytkownik wprowadza
liczbę elementów do `input` i naciska przycisk `Utwórz`, co rozpoczyna
tworzenie się kolekcji. Po naciśnięciu przycisku `Usuń`, kolekcja elementów zostaje usunięta.

```html
<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
```

Utwórz funkcję `createBoxes(amount)`, która bierze jeden parametr - liczbę.
Funkcja tworzy tyle `<div>`, ile ukazano w `amount` i dodaje je do
`div#boxes`.

1. Wymiary pierwszego `<div>` - 30px na 30px.
2. Każdy następny element powinien być szerszy i wyższy od poprzedniego o 10px.
3. Wszystkie elementy powinny mieć losowy kolor tła w formacie NEX. Użyj
   gotowej funkcji `getRandomHexColor` aby otrzymać kolor.

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
```

Utwórz funkcję `destroyBoxes()`, która usuwa zawartość `div#boxes`, tym
samym usuwając wszystkie utworzone elementy.
