# Задание 1

Напиши скрипт, который, для объекта user, последовательно:

    - добавляет поле mood со значением 'happy'

    - заменяет значение hobby на 'javascript'

    - заменяет значение premium на false

    - выводит содержимое объекта user в формате ключ:значение
      используя Object.keys и for...of

    - выводит содержимое объекта user в формате ключ:значение
      используя Object.entries и for...of

const user = { name: "Mango", age: 20, hobby: "html", premium: true };

# Задание 2

Напиши скрипт который определит и выведет в консоль имя сотрудника который
выполнил больше всех задач.

Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате
"имя":"кол-во задач"

```js
const tasksCompleted = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
```

# Задание 3

Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция
возвращает количество свойств.

```js
// Вызовы функции для проверки
console.log(countProps({})); // 0

console.log(countProps({ a: 1, b: 3, c: 'hello' })); // 3
```

# Задание 4

Напиши функцию isObjectEmpty(obj), которая получает один аргумент obj - объект,
и проверяет пуст ли он (есть ли в нем свойства).

Возвращает true если объект пустой, false если не пустой.

```js
// Вызовы функции для проверки
console.log(isObjectEmpty({})); // true

console.log(isObjectEmpty({ a: 1 })); // false

console.log(isObjectEmpty({ a: 1, b: 2 })); // false
```

# Задание 4

Напиши функцию countTotalSalary(salaries).

Функция получает объект зарплат и считает общую сумму запрплаты работников.
Возвращает общую сумму зарплаты.

Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"

```js
// Вызовы функции для проверки
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330
```

# Задание 5

Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и
имя ключа. Возвращает массив значений определенного поля prop из каждого объекта
в массиве

```js
const users = [
  { name: 'Poly', age: 7, mood: 'happy' },
  { name: 'Mango', age: 4, mood: 'blissful' },
  { name: 'Ajax', age: 3, mood: 'tired' },
];

// Вызовы функции для проверки
console.log(getAllPropValues(users, 'name')); // ['Poly', 'Mango', 'Ajax']

console.log(getAllPropValues(users, 'mood')); // ['happy', 'blissful', 'tired']

console.log(getAllPropValues(users, 'active')); // []
```

# Задание 6

Есть два массива names и prices с именами и ценами товаров. Напишите функцию
combine(names, prices), которая получает эти два массива и возвращает массив
объектов со свойствами name и price.

```js
const names = [
  'Радар',
  'Сканер',
  'Дроид',
  'Захват',
  'Двигатель',
  'Топливный бак',
];
const prices = [1000, 2000, 1500, 2700, 1600, 8000];

const products = combine(names, prices);
console.log(products); // массив объектов со свойствами name и price
```

# Задание 7

```js
const store = {
  products: [
    { id: 'id-1', name: 'droid', price: 20, quantity: 100 },
    { id: 'id-2', name: 'generator', price: 30, quantity: 40 },
  ],
  getProducts() {},
  findProduct(id) {},
  addProduct(product) {},
  removeProduct(id) {},
  updatePrice(id, price) {},
  increaseQuantity(id, amount) {},
  decreaseQuantity(id, amount) {},
  getProductsWithQuantity(amount) {},
};
```

# Задание 8

```js
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],
  withdraw(amount) {},
  deposit(amount) {},
  addTransaction(transaction) {},
  getBalance() {},
  getTransactionHistory() {},
  getTransactionAmountByType(type) {},
};
```
