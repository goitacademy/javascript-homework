# Задание 1

Напиши функцию-конструктор `Account`, которая создает объект со свойствами
`login` и `email`. В `prototype` функции-конструктора добавь метод `getInfo()`,
который выводит в консоль значения полей `login` и `email` объекта который его
вызвал.

```js
const mango = new Account('Mangozedog', 'mango@dog.woof');
const poly = new Account('Poly', 'poly@mail.com');

console.log(Account.prototype.getInfo); // function
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
poly.getInfo(); // Login: Poly, Email: poly@mail.com
```

# Задание 2

Напиши ES6-класс `User(name, age, friends)` для создания пользователя со
следующим свойствами:

- name - строка (имя)
- age - число (возраст)
- friends - число (кол-во друзей)

Добавь метод `getInfo()`, который, выводит строку:
`User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

```js
const mango = new User({ name: 'Mango', age: 2, friends: 20 });
mango.getInfo(); // User Mango is 2 years old and has 20 friends

const poly = new User({ name: 'Poly', age: 3, friends: 17 });
poly.getInfo(); // User Poly is 3 years old and has 17 friends
```

# Задание 3

Напиши класс `Storage(items)`, который будет создавать объекты для управления
складом товаров. При вызове будет получать один аргумент - начальный массив
товаров, и записывать его в свойство `items`.

- Добавь метод `getItems()`, который возвращает массив текущих товаров
- Добавь метод addItem(item), который получает новый товар и добавляет его к
  текущим
- Добавь метод removeItem(item), который получет товар и, если он есть, удаляет
  его из текущих

```js
const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
```

# Задание 4

Напиши класс `StringBuilder(baseString)`. На вход он получает один параметр -
строку, которую записывает в свойство `_value`.

Добавь классу следующий функционал:

- Геттер `value` - возвращает текущее значение поля `_value`
- Метод `append(str)` - получает парметр str (строку) и добавляет ее в конец
  `_value`
- Метод `prepend(str)` - получает парметр str (строку) и добавляет ее в начало
  value
- Метод `pad(str)` - получает парметр str (строку) и добавляет ее в начало и в
  конец `_value`

```js
const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value; // '^.^'

builder.pad('=');
console.log(builder.value; // '=^.^='
```

# Задание 5

Напиши класс `Car` с указанными свойствами и методами.

```js
class Car {
  constructor({ maxSpeed = 0 }) {
    /*
     * Добавь свойства:
     *   - speed - для отслеживания текущей скорости, изначально 0.
     *   - maxSpeed - для хранения максимальной скорости
     *   - running - для отслеживания заведен ли автомобиль,
     *      возможные значения true или false. Изначально false.
     *   - distance - содержит общий киллометраж, изначально с 0
     */
  }

  turnOn() {
    // Добавь код для того чтобы завести автомобиль
    // Просто записывает в свойство running значание true
  }

  turnOff() {
    // Добавь код для того чтобы заглушить автомобиль
    // Просто записывает в свойство running значание false
  }

  accelerate(spd) {
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed
  }

  decelerate(spd) {
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed и не меньше нуля
  }

  drive(hours) {
    // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
    // но только в том случае если машина заведена!
  }
}

const car = new Car({ maxSpeed: 100, price: 2000 });

car.turnOn();
car.accelerate(50);
car.drive(2);

Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100

console.log(car.value); // 2000

car.value = 4000;
console.log(car.value); // 4000
```

Добавь к классу Car из предыдущего задания статический метод getSpecs, который
принимает объект-машину как параметр и выводит в консоль значения полей
maxSpeed, speed, running и distance.

Добавь классу Car свойство цены автомобиля, назови его сам. Добавь геттер и
сеттер value, который будет работать с свойством цены автомобиля.
