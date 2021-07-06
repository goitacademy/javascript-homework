**Читать на других языках: [Русский](README.md), [Українська](README.ua.md).**

# Критерии приема

- Создан репозиторий `goit-js-hw-09`.
- При сдаче домашней работы есть две ссылки для каждого проекта: на исходные
  файлы и рабочую страницу на GitHub pages.
- При посещении рабочей страницы задания, в консоли нету ошибок и предупреждений
- Проект собран с помощью
  [parcel-project-template](https://github.com/goitacademy/parcel-project-template).
- Код отформатирован `Prettier`.

## Задание 1 - переключатель цветов

В HTML есть кнопки `Start` и `Stop`.

```html
<button type="button" data-start>Start</button>
<button type="button" data-stop>Stop</button>
```

Напиши скрипт, который после нажатия кнопки `Start`, раз в секунду меняет цвет
фона `<body>` на случайное значение используя инлайн стиль. При нажатии на
кнопку `Stop`, изменение цвета фона должно останавливаться.

> ⚠️ Учти, на кнопку `Start` можно нажать бесконечное количество раз. Сделай
> так, чтобы пока изменение темы запушено, кнопка `Start` была не активна.

Для генерации случайного цвета используй функцию `getRandomHexColor`.

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
```

## Задание 2 - промисификация

### Задание 1

Напиши функцию `delay(ms)`, которая возвращает промис, переходящий в состояние
`"resolved"` через `ms` миллисекунд. Значением исполнившегося промиса должно
быть то кол-во миллисекунд которое передали во время вызова функции `delay`.

```js
const delay = ms => {
  // Твой код
};

const logger = time => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms
```

### Задание 2

Перепиши функцию `toggleUserState()` так, чтобы она не использовала
callback-функцию `callback`, а принимала всего два параметра `allUsers` и
`userName` и возвращала промис.

```js
const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName, callback) => {
  const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user
  );

  callback(updatedUsers);
};

const logger = updatedUsers => console.table(updatedUsers);

/*
 * Сейчас работает так
 */
toggleUserState(users, 'Mango', logger);
toggleUserState(users, 'Lux', logger);

/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
```

### Задание 3

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
      onSuccess(transaction.id, delay);
    } else {
      onError(transaction.id);
    }
  }, delay);
};

const logSuccess = (id, time) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

/*
 * Работает так
 */
makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
/*
 * Должно работать так
 */
makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
```

## Задание 3 - таймер обратного отсчета

Напиши скрипт таймера, который ведёт обратный отсчет до предварительно
определенной даты. Такой таймер может использоваться в блогах и
интернет-магазинах, страницах регистрации событий, во время технического
обслуживания и т. д.

![preview](preview.gif)

Плагин ожидает следующую HTML-разметку и показывает четыре цифры: дни, часы,
минуты и секунды в формате `xx:xx:xx:xx`. Количество дней может состоять из
более чем двух цифр.

```html
<div class="timer">
  <div class="field">
    <span class="value" data-days>11</span>
    <span class="label">Days</span>
  </div>

  <div class="field">
    <span class="value" data-hours>11</span>
    <span class="label">Hours</span>
  </div>

  <div class="field">
    <span class="value" data-minutes>11</span>
    <span class="label">Minutes</span>
  </div>

  <div class="field">
    <span class="value" data-seconds>11</span>
    <span class="label">Seconds</span>
  </div>
</div>
```

Плагин это класс `CountdownTimer`, экземпляр которого создает новый таймер с
настройками.

```js
new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});
```

Для подсчета значений используй готовую функцию, где `ms` - разница между
`targetDate` и текущей датой в миллисекундах.

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
console.log(convertMs(140000)); //{days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6, minutes: 42, seconds: 20}
```

## Задание 4 - калькулятор возраста
