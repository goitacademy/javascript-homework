**Читать на других языках: [Русский](README.md), [Українська](README.ua.md).**

# Критерії прийому

- Створено репозиторій `goit-js-hw-04`
- При здачі домашньої роботи є посилання на вихідні файли в репозиторії
- Кожне завдання виконано в окремому файлі з ім'ям `task-номер_завдання.js`.
  Використовуй `<script type="module">` щоб закрити код завдання в окремій
  області видимості і уникнути конфліктів імен ідентифікаторів.
- Імена змінних зрозумілі, описові
- Код відформатований за допомогою Prettier

# Завдання 1

Розстав відсутні `this` в методах об'єкта `account`.

```js
const account = {
  owner: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['order-1', 'order-2', 'order-3'],
  changeDiscount(value) {
    discount = value;
  },
  showOrders() {
    return orders;
  },
  addOrder(cost, order) {
    balance -= cost;
    orders.push(order);
  },
};

account.changeDiscount(0.15);
console.log(account.discount); // 0.15

console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

account.addOrder(5000, 'order-4');
console.log(account.balance); // 19000
console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']
```

# Завдання 2

Виправ помилки, які будуть в консолі, щоб скрипт запрацював.

```js
const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);

    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter(item => item !== itemName);
  },
};

const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action(itemName);
};

invokeInventoryAction('Medkit', inventory.add);
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction('Gas mask', inventory.remove);
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']
```
