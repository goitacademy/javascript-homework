**Читать на других языках: [Русский](README.md), [Українська](README.ua.md).**

# Критерии приема

- Создан репозиторий `goit-js-hw-09`.
- При сдаче домашней работы есть две ссылки для каждого проекта: на исходные
  файлы и рабочую страницу на `GitHub Pages`.
- При посещении живой страницы задания, в консоли нету ошибок и предупреждений.
- Проект собран с помощью
  [**parcel-project-template**](https://github.com/goitacademy/parcel-project-template).
- Код отформатирован `Prettier`.

## Стартовые файлы

В [**папке src**](./src) ты найдешь стартовые файлы с готовой разметкой, стилями
и подключенными файлами скриптов для каждого задания. Скопируй их себе в проект,
полностью заменив папку `src` в
[**parcel-project-template**](https://github.com/goitacademy/parcel-project-template).
Для этого скачай весь этот репозиторий как архив или используй сервис
[DownGit](https://downgit.github.io/) для скачивания отдельной папки из
репозитория.

## Задание 1 - переключатель цветов

Выполняй это задание в файлах `01-color-switcher.html` и `01-color-switcher.js`.
В HTML есть кнопки `Start` и `Stop`.

```html
<button type="button" data-start>Start</button>
<button type="button" data-stop>Stop</button>
```

Напиши скрипт, который после нажатия кнопки `Start`, раз в секунду меняет цвет
фона `<body>` на случайное значение используя инлайн стиль. При нажатии на
кнопку `Stop`, изменение цвета фона должно останавливаться.

> ⚠️ Учти, на кнопку `Start` можно нажать бесконечное количество раз. Сделай
> так, чтобы пока изменение темы запушено, кнопка `Start` была не активна
> (disabled).

Для генерации случайного цвета используй функцию `getRandomHexColor`.

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
```

## Задание 2 - таймер обратного отсчета

Выполняй это задание в файлах `01-timer.html` и `01-timer.js`. Напиши скрипт
таймера, который ведёт обратный отсчет до определенной даты. Такой таймер может
использоваться в блогах и интернет-магазинах, страницах регистрации событий, во
время технического обслуживания и т. д.

![Countdown timer preview](preview.gif)

В HTML есть готовая разметка таймера, поле для выбора конечной даты и кнопки,
при клике по которым таймер должен запускаться или останавливаться. Добавь
минимальное оформление элементов интерфейса.

```html
<input type="date" id="date-selector" />
<button type="button" data-start>Start</button>
<button type="button" data-stop>Stop</button>

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

- Если пользователь выбрал валидную дату (в будущем), интерфейс таймера
  обновляется и видно сколько времени до выбранной даты.
- Кнопка «Start» должа быть не активна до тех пор, пока пользователь не выбрал
  дату в будущем.
- Если выбрана валидная дата и пользователь нажал кнопку «Start» - начинается
  отсчет времени.
- Кнопка «Stop» должа быть активна только когда таймер запущен.
- При нажатии на кнопку «Stop» таймер останавливается, а его интерфейс
  обнуляется.
- Если пользователь выбрал дату в прошлом, необходимо показать уведомление
  `"Please choose a date in the future"` используя `window.alert()`.

Скрипт должен вычислять раз в секунду сколько времени осталось до указанной даты
и обновлять интерфейс таймера, показывая четыре цифры: дни, часы, минуты и
секунды в формате `xx:xx:xx:xx`.

- Количество дней может состоять из более чем двух цифр.
- Таймер должен останавливаться когда дошел до конечной даты, то есть
  `00:00:00:00`.

Для подсчета и форматирования значений используй готовые функции
`addLeadingZero` и `convertMs`, где `ms` - разница между конечной и текущей
датой в миллисекундах.

```js
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

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

  return {
    days: addLeadingZero(days),
    hours: addLeadingZero(hours),
    minutes: addLeadingZero(minutes),
    seconds: addLeadingZero(seconds),
  };
}

console.log(convertMs(2000)); // {days: "00", hours: "00", minutes: "00", seconds: "02"}
console.log(convertMs(140000)); // {days: "00", hours: "00", minutes: "02", seconds: "20"}
console.log(convertMs(24140000)); // {days: "00", hours: "06", minutes: "42", seconds: "20"}
```

### Библиотека уведомлений

> ⚠️ Следующий функционал не обязателен при сдаче задания, но будет хорошей
> дополнительной практикой.

Для отображения уведомлений пользователю вместо `window.alert()` используй
[**библиотеку notiflix**](https://github.com/notiflix/Notiflix).

## Задание 3 - промисификация функций

Выполняй это задание в файлах `01-promisify.html` и `01-promisify.js`.

### Подзадание 1

Напиши функцию `delay(ms)`, которая возвращает промис, переходящий в состояние
`"resolved"` через `ms` миллисекунд. Значением исполнившегося промиса должно
быть то кол-во миллисекунд которое передали во время вызова функции `delay`.

```js
const delay = ms => {
  // Change this function
};

const logger = time => console.log(`Fulfilled after ${time}ms`);

// Tests
delay(2000).then(logger); // Fulfilled after 2000ms
delay(1000).then(logger); // Fulfilled after 1000ms
delay(1500).then(logger); // Fulfilled after 1500ms
```

### Подзадание 2

Перепиши функцию `toggleUserState()` так, чтобы она не использовала
callback-функцию `callback`, а принимала всего два параметра `allUsers` и
`username` и возвращала промис.

```js
const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: false },
];

const toggleUserState = (allUsers, username, callback) => {
  const updatedUsers = allUsers.map(user =>
    user.name === username ? { ...user, active: !user.active } : user
  );

  callback(updatedUsers);
};

// Currently the function works like this
toggleUserState(users, 'Mango', console.table);
toggleUserState(users, 'Ajax', console.table);

// Function should work like this
toggleUserState(users, 'Mango').then(console.table);
toggleUserState(users, 'Ajax').then(console.table);
```

### Подзадание 3

Перепиши функцию `makeTransaction()` так, чтобы она не использовала
callback-функции `onSuccess` и `onError`, а принимала всего один параметр
`transaction` и возвращала промис.

```js
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction, onSuccess, onError) => {
  const delay = randomIntegerFromInterval(200, 500);

  setTimeout(() => {
    const canProcess = Math.random() > 0.3;

    if (canProcess) {
      onSuccess({ id: transaction.id, time: delay });
    } else {
      onError(transaction.id);
    }
  }, delay);
};

const logSuccess = ({ id, time }) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

// Currently the function works like this
makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);

// Fnction should work like this
makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);
makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);
```
