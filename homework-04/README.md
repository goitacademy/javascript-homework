# Критерии приема

- Создан репозиторий `goit-js-hw-04`
- При сдаче домашней работы есть ссылка на исходные файлы в репозитории
- Каждое задание выполнено в отдельном файле. Используй `<script type="module">`
  чтобы закрыть код задания в отдельной области видимости.
- Имена переменных и функций понятные, описательные
- Код отформатирован с помощью Prettier

# Задание 1

Расставь отсутствующие this в методах объекта account

```js
const account = {
  owner: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['order-1', 'order-2', 'order-3'],
  changeDiscount(value) {
    discount = value;
  },
  getOrders() {
    return orders;
  },
  addOrder(cost, order) {
    balance -= cost;
    orders.push(order);
  },
};

account.changeDiscount(0.15);
console.log(account.discount); // 0.15

const orders = account.getOrders();
console.log(orders); // ['order-1', 'order-2', 'order-3']

account.addOrder(5000, 'order-4');
console.log(account.balance); // 19000
console.log(account.orders); // ['order-1', 'order-2', 'order-3', 'order-4']
```
