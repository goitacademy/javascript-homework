**Читать на других языках: [Русский](README.md), [Українська](README.ua.md).**

# Критерии приема

- Созданы репозитории `goit-js-hw-11-color-switch`,
  `goit-js-hw-11-promisification` и `goit-js-hw-11-timer`.
- При сдаче домашней работы есть две ссылки для каждого проекта: на исходные
  файлы и рабочую страницу на GitHub pages.
- При посещении рабочей страницы (GitHub pages) задания, в консоли нету ошибок и
  предупреждений
- Имена переменных и функций понятные, описательные
- Код отформатирован с помощью `Prettier`

## Задание 1 - переключатель цветов

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

## Задание 2 - Промисификация

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

## Задание 3 - Таймер обратного отсчета

Создай плагин настраиваемого таймера, который ведет обратный отсчет до
предварительно определенной даты. Такой плагин может использоваться в блогах и
интернет-магазинах, страницах регистрации событий, во время технического
обслуживания и т. д.

![preview](preview.gif)

Плагин ожидает следующую HTML-разметку и показывает четыре цифры: дни, часы,
минуты и секунды в формате `XX:XX:XX:XX`. Количество дней может состоять из
более чем двух цифр.

```html
<div class="timer" id="timer-1">
  <div class="field">
    <span class="value" data-value="days">11</span>
    <span class="label">Days</span>
  </div>

  <div class="field">
    <span class="value" data-value="hours">11</span>
    <span class="label">Hours</span>
  </div>

  <div class="field">
    <span class="value" data-value="mins">11</span>
    <span class="label">Minutes</span>
  </div>

  <div class="field">
    <span class="value" data-value="secs">11</span>
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

Для подсчета значений используй следующие готовые формулы, где `time` - разница
между `targetDate` и текущей датой.

```js
/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
const secs = Math.floor((time % (1000 * 60)) / 1000);
```
