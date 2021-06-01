**Читать на других языках: [Русский](README.md), [Українська](README.ua.md).**

# Критерії прийому

- Створено репозиторій `goit-js-hw-05`
- При здачі домашньої роботи є посилання на вихідні файли в репозиторії
- Кожне завдання виконано в окремому файлі з ім'ям `task-номер_завдання.js`.
  Використовуй `<script type="module">` щоб закрити код завдання в окремій
  області видимості і уникнути конфліктів імен ідентифікаторів.
- Імена змінних зрозумілі, описові
- Код відформатований за допомогою Prettier

# Завдання 1

Напиши функцію-конструктор `Account`, яка створює об'єкт з властивостями `login`
і `email`. В `prototype` функції-конструктора добав метод `getInfo()`, який
виводить в консоль значення полів `login` і `email` об'єкта який його викликав.

```js
console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com
```

# Завдання 2

Напиши клас `User` для створення користувача з наступними властивостями:

- `name` - рядок
- `age` - число
- `followers` - число

Добав метод `getInfo()`, який, виводить рядок:
`User ${ім'я} is ${вік} years old and has ${кількість фоловерів} followers`

```js
const mango = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
});

mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User({
  name: 'Poly',
  age: 3,
  followers: 17,
});

poly.getInfo(); // User Poly is 3 years old and has 17 followers
```

# Завдання 3

Напиши клас `Storage`, який буде створювати об'єкти для управління складом
товарів. При виклику буде отримувати один аргумент - початковий масив товарів, і
записувати його у властивість `items`.

Додай методи класу:

- `getItems()` - повертає масив поточних товарів
- `addItem(item)` - отримує новий товар і додає його до поточних
- `removeItem(item)` - отримує товар і, якщо він є, видаляє його з поточних

```js
const storage = new Storage([
  'Нанітоіди',
  'Пролонгер',
  'Залізні жупи',
  'Антигравітатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд');
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
```

# Завдання 4

Напиши клас `StringBuilder`. На вхід він отримує один параметр - рядок,
який записує у властивість `_value`.

Додай класу наступний функціонал:

- Геттер `value` - повертає поточне значення поля `_value`
- Метод `append(str)` - отримує параметр str (рядок) і додає його в кінець
  `_value`
- Метод `prepend(str)` - отримує параметр str (рядок) і додає його на початок
  `_value`
- Метод `pad(str)` - отримує параметр str (рядок) і додає його на початок і в кінець `_value`

```js
const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
```

# Завдання 5

Напиши клас `Car` із зазначеними властивостями і методами.

```js
class Car {
  /*
   * Додай статичний метод `getSpecs(car)`,
   * який приймає об'єкт-машину як параметр і виводить
   * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
   */

  /*
   * Конструктор отримує об'єкт налаштувань.
   *
   * Додай властивості майбутнього екземпляра класу:
   *  speed - поточна швидкість, початкова 0
   *  price - ціна автомобіля
   *  maxSpeed - максимальна швидкість
   *  isOn - заведений автомобіль, значення true або false. Спочатку false
   *  distance - загальний кілометраж, спочатку 0
   */
  constructor() {}

  /*
   * Додай геттер і сеттер для властивості price,
   * який буде працювати з властивістю ціни автомобіля.
   */

  /*
   * Додай код для того, щоб завести автомобіль
   * Записує у властивість isOn значення true
   */
  turnOn() {}

  /*
   * Додай код для того, щоб заглушити автомобіль
   * Записує у властивість isOn значення false,
   * і скидає поточну швидкість в 0
   */
  turnOff() {}

  /*
   * Додає до властивості speed отримане значення,
   * за умови, що результуюча швидкість
   * не більше, ніж значення властивості maxSpeed
   */
  accelerate(value) {}

  /*
   * Забирає від властивості speed отримане значення,
   * за умови, що результуюча швидкість не менше нуля
   */
  decelerate(value) {}

  /*
   * Додає в поле distance кілометраж (hours * speed),
   * але тільки в тому випадку, якщо машина заведена!
   */
  drive(hours) {}
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
```
