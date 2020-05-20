**Читать на других языках: [Русский](README.md), [Українська](README.ua.md).**

# Критерії прийому

- Створено репозиторій `goit-js-hw-03`
- При здачі домашньої роботи є посилання на вихідні файли в репозиторії
- Кожне завдання виконано в окремому файлі з ім'ям `task-номер_завдання.js`.
  Використовуй `<script type="module">` щоб закрити код завдання в окремій
  області видимості і уникнути конфліктів імен ідентифікаторів.
- Імена змінних зрозумілі, описові
- Код відформатований за допомогою Prettier

# Завдання 1

Напиши скрипт, який, для об'єкта `user`, послідовно:

- додає поле `mood` зі значенням `'happy'`
- замінює значення `hobby` на `'skydiving'`
- замінює значення `premium` на `false`
- виводить вміст об'єкта `user` в форматі `ключ:значення` використовуючи
  `Object.keys()` і `for...of`

```js
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
```

# Завдання 2

Напиши функцію `countProps(obj)`, яка рахує кількість властивостей в об'єкті.
Функція повертає число - кількість властивостей.

```js
const countProps = function (obj) {
  // твій код
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
```

# Завдання 3

Напиши функцію `findBestEmployee(employees)`, яка приймає об'єкт співробітників
і повертає ім'я найпродуктивнішого (який виконав більше всіх задач).
Співробітники і кількість виконаних завдань містяться як властивості об'єкта в
форматі `"ім'я":"кількість задач"`.

```js
const findBestEmployee = function (employees) {
  // твій код
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
```

# Завдання 4

Напиши функцію `countTotalSalary(employees)` приймаючу об'єкт зарплат. Функція
рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта,
переданого в функцію, має вигляд `"ім'я":"зарплата"`.

```js
const countTotalSalary = function (employees) {
  // твій код
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
```

# Завдання 5

Напиши функцію `getAllPropValues(arr, prop)`, яка отримує масив об'єктів і ім'я
властивості. Повертає масив значень певної властивості `prop` з кожного об'єкта
в масиві.

```js
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  // твій код
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []
```

# Завдання 6

Напиши функцію `calculateTotalPrice(allProdcuts, productName)`, яка отримує
масив об'єктів та ім'я продукту (значення властивості `name`). Повертає загальну
вартість продукту (ціна \* кількість).

Викличи функції для перевірки працездатності твоєї реалізації.

```js
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  // твій код
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроїд')); // 2800
```

# Завдання 7 - додаткове, виконувати не обов'язково

Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт `account`
в якому необхідно реалізувати методи для роботи з балансом та історією
транзакцій.

```js
/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */
  createTransaction(amount, type) {},

  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {},

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {},

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {},

  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {},

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {},
};
```
