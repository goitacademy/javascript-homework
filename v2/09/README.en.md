**Read in other languages: [Русский](README.md), [Українська](README.ua.md), [English](README.en.md), [Español](README.es.md), [Polski](README.pl.md).**

# Acceptance criteria

- `goit-js-hw-09` repository created.
- In your submitted homework, there are two links for each project: One to your source files and one to your working page on `GitHub Pages`.
- During live page visits, there are no errors or warnings generated in the console.
- Project built with [parcel-project-template](https://github.com/goitacademy/parcel-project-template).
- Code formatted with `Prettier`.

## Start files

In the [src folder](./src), you will find start files with ready-made markup, styles, and added script files for each task. Copy them to your project, completely replacing the `src` folder in [parcel-project-template](https://github.com/goitacademy/parcel-project-template). To do this, download this entire repository as an archive or use the [DownGit service](https://downgit.github.io/) to download a separate folder from the repository.

## Task 1 - color switcher

Do this task in the `01-color-switcher.html` and `01-color-switcher.js` files. Check out the demo video of the switcher.

https://user-images.githubusercontent.com/17479434/127716753-fabd276f-6a7d-411b-bfa2-01c818f4ea66.mp4

In HTML, there are "Start" and "Stop" buttons.

```html
<button type="button" data-start>Start</button>
<button type="button" data-stop>Stop</button>
```

Write a script that, after clicking the "Start" button, changes the `<body>` background color once a second to a random value using an inline style. When clicking on the "Stop" button, the background color change must stop.

> ⚠️ Please note that the "Start" button can be clicked an infinite number of times. Make sure that the "Start" button is disabled while the theme change is running.

Use the `getRandomHexColor` function to generate a random color.

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
```

## Task 2 - countdown timer

Do this task in the `02-timer.html` and `02-timer.js` files. Write a timer script that counts down to a specific date. Such a timer can be used in blogs and online stores, event-logging pages, during maintenance, etc. Watch a demo video of the timer.

https://user-images.githubusercontent.com/17479434/127672390-2a51efe1-06fb-41dd-86dd-8542393d3043.mp4

### Interface elements

In HTML, there is ready-made markup for the timer, end date selection field, and a button that should trigger the timer when clicked. Add at least some decoration to the interface elements.

```html
<input type="text" id="datetime-picker" />
<button type="button" data-start>Start</button>

<div class="timer">
  <div class="field">
    <span class="value" data-days>00</span>
    <span class="label">Days</span>
  </div>
  <div class="field">
    <span class="value" data-hours>00</span>
    <span class="label">Hours</span>
  </div>
  <div class="field">
    <span class="value" data-minutes>00</span>
    <span class="label">Minutes</span>
  </div>
  <div class="field">
    <span class="value" data-seconds>00</span>
    <span class="label">Seconds</span>
  </div>
</div>
```

### `flatpickr` library

Use the [flatpickr](https://flatpickr.js.org/) library to allow cross-browser selection of the end date and time in a single UI element. In order to add the CSS code of the library to the project, you need to add one more import aside from the one described in the documentation.

```js
// Described in import flatpickr from 'flatpickr' documentation;
// Additional styles import: import 'flatpickr/dist/flatpickr.min.css';
```

The library expects to be initialized on the `input[type="text"]` element, so there is an `input#datetime-picker` field added to the HTML document.

```html
<input type="text" id="datetime-picker" />
```

An optional parameter object can be passed as the second argument to the `flatpickr(selector, options)` function. We have prepared an object for you that you need in order to complete the task. Find about the role of each property in the [Options documentation](https://flatpickr.js.org/options/) and use it in your code.

```js
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
```

### Date selection

The `onClose()` method is called from the parameter object every time the interface element that creates `flatpickr` is closed. It should be used to handle the date selected by the user. The `selectedDates` parameter is an array of the selected dates, so the first element is taken.

- If the user selects a date from the past, show `window.alert()` with the text `"Please choose a date in the future"`.
- If the user has selected a valid date (in the future), the "Start" button becomes active.
- The "Start" button must be inactive until the user has selected a date in the future.
- When you click the "Start" button, the countdown to the selected date starts from the time of clicking.

### Countdown

When you click on the "Start" button, the script must calculate, once per second, how much time is left until the specified date and update the timer interface, showing four numbers: Days, hours, minutes, and seconds in the following format: `xx:xx:xx:xx`.

- The number of days can be more than two digits.
- The timer must stop when it reaches the end date, that is, `00:00:00:00`.

> 💡 Let's not complicate things. If the timer is running, in order to select a new date and restart it, you need to reload the page.

To calculate the values, use the ready-made function, `convertMs`, where `ms` is the difference between the end and current date in milliseconds.

```js
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
```

### Time formatting

The `convertMs()` function returns an object with the calculated time remaining until the end date. Note that it does not format the result. That is, if there are 4 minutes (or any other time unit) left, the function will return `4`, not `04`. In the timer interface, you need to add `0` if there are less than two digits in the number. Write an `addLeadingZero(value)` function that uses the `padStart()` method and format the value before rendering the interface.

### Notification library

> ⚠️ The following features are optional, but they will be good for additional practice.

Use the [notiflix](https://github.com/notiflix/Notiflix#readme) library to display notifications to the user instead of `window.alert()`.

## Task 3 - promise generator

Do this task in the `03-promises.html` and `03-promises.js` files. Watch a demo video of the promise generator.

https://user-images.githubusercontent.com/17479434/127932183-42232f26-4db2-4614-86bc-6bec54b1d6a4.mp4

In HTML, there is form markup; in its fields, the user will enter the first delay in milliseconds, the delay increment for each promise after the first one, and the number of promises to be created.

```html
<form class="form">
  <label>
    First delay (ms)
    <input type="number" name="delay" required />
  </label>
  <label>
    Delay step (ms)
    <input type="number" name="step" required />
  </label>
  <label>
    Amount
    <input type="number" name="amount" required />
  </label>
  <button type="submit">Create promises</button>
</form>
```

Write a script that, when submitting the form, calls the `createPromise(position, delay)` function as many times as you entered in the `amount` field. On each call, pass it the number of the promises to be created (`position`) and the delay given the first delay (`delay`) and step (`step`) entered by the user.

```js
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
```

Supplement the code of the `createPromise` function so that it returns **one promise** that will be fulfilled or rejected after `delay` time. The value of the promise must be an object containing the `position` and `delay` properties with the values of these parameters. Use the initial function code to choose whether to fulfill or reject the promise.

```js
createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
```

### Notification library

> ⚠️ The following features are optional, but they will be good for additional practice.

Use the [notiflix](https://github.com/notiflix/Notiflix#readme) library to display notifications to the user instead of `console.log()`.
