## Задание 1

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

## Задание 2

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
    user.name === userName ? { ...user, active: !user.active } : user,
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

## Задание 3

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
makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);
```
