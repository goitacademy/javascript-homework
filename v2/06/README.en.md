**Read in other languages: [Русский](README.md), [Українська](README.ua.md), [English](README.en.md), [Español](README.es.md), [Polski](README.pl.md).**

# Acceptance criteria

- `goit-js-hw-06` repository created.
- In your submitted homework, there are two links: One to your source files and one to your working page on `GitHub Pages`.
- All tasks are completed strictly according to the specifications (do not change the original HTML in the task).
- During live page visits, there are no errors or warnings generated in the console.
- Clear and descriptive names of variables and functions.
- Code formatted with `Prettier`.

## Start files

In the [src folder](./src), you will find start files with ready-made markup and added script files for each task. Copy them to your project. To do this, download this entire repository as an archive or use the [DownGit service](https://downgit.github.io/) to download a separate folder from the repository.

## Task 1

In HTML, there is a list of categories, `ul#categories`.

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

Write a script that:

1. Will count and display in the console the number of categories in `ul#categories`, that is, `li.item` elements.
2. For each `li.item` element in the `ul#categories` list, will find and display in the console the element header text (`<h2>` tag) and the number of elements in the category (all nested `<li>`).

As a result, the following messages will be displayed in the console.

```bash
Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
```

## Task 2

In HTML, there is an empty `ul#ingredients` list.

```html
<ul id="ingredients"></ul>
```

In JavaScript, there is an array of strings.

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

Write a script that, for each element in the `ingredients` array:

1. Will create a separate `<li>` element. Be sure to use the `document.createElement()` method.
2. Will add the ingredient name as the `<li>` element's text content.
3. Will add the `item` class to the `<li>` element.
4. Will insert all `<li>` elements to the `ul.ingredients` list in a single operation.

## Task 3

Write a script to create a gallery of images from an array of data. There is a list, `ul.gallery`, in HTML.

```html
<ul class="gallery"></ul>
```

Use an array of objects, `images`, to create `<img>` elements nested in `<li>`. Use template strings and the `insertAdjacentHTML()` method to create markup.

- All gallery items must be added to DOM in one insert operation.
- Add at least some gallery design with flexboxes or grids using CSS classes.

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

## Task 4

The counter consists of a span and buttons, which, when clicked, should increase and decrease its value by one.

```html
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
```

- Create a variable, `counterValue`, that will store the current counter value and initialize it with `0`.
- Add listeners for clicks on the buttons; inside them, increase or decrease the value of the counter.
- Update the interface with the new value of the variable `counterValue`.

## Task 5

Write a script that, when typing in the `input#name-input` input (`input` event), substitutes its current value into `span#name-output`. If the input is empty, the span should display the `"Anonymous"` string.

```html
<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
```

## Task 6

Write a script that, when focus on input is lost (`blur` event), checks its contents for the correct number of entered characters.

```html
<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>
```

- The number of characters in the input is specified in its `data-length` attribute.
- If the number of characters entered is correct, the input's `border` turns green, or red with a wrong number.

To add styles, use the `valid` and `invalid` CSS classes, which you can find in the task source files.

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

## Task 7

Write a script that responds to changes in the value of `input#font-size-control` (`input` event) and changes the inline style of `span#text` by updating the `font-size` property. As a result, the text size will respond to scrollbar dragging by changing size.


```html
<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>
```

## Task 8

Write a script to manage the login form.

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

1. Form submission (`form.login-form`) must be processed on the `submit` event.
2. The page must not reload when the form is submitted.
3. If the form has empty fields, display an `alert` saying that all fields must be filled in.
4. As soon as the user has filled in all the fields and submitted the form, collect the field values into an object where the field name will be the property name and the field value will be the property value. Use the `elements` property to access form elements.
5. Display the object with the entered data in the console and clear the values of the form fields using the `reset` method.

## Task 9

Write a script that changes the background colors of the `<body>` element via inline style when clicking on `button.change-color` and outputs the color value to `span.color`.

```html
<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
```

Use the `getRandomHexColor` function to generate a random color.

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
```

## Task 10 (optional)

Write a script to create and clear a collection of elements. The user enters the number of elements into `input` and clicks the `New` button, after which a collection is rendered. When you click on the `Clear` button, the collection is cleared.

```html
<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
```

Create a `createBoxes(amount)` function that takes one parameter, a number. The function creates as many `<div>` as specified in `amount` and adds them to `div#boxes`.

1. The dimensions of the very first `<div>` are 30px by 30px.
2. Each element after the first one should be 10px wider and higher than the previous one.
3. All elements must have a random hex background color. Use the ready-made `getRandomHexColor` function to get a color.

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
```

Create a `destroyBoxes()` function that clears the contents of `div#boxes`, thereby removing all created elements.
