**Читать на других языках: [Русский](README.md), [Українська](README.ua.md).**

# Критерии приема

- Создан репозиторий `goit-js-hw-06`
- При сдаче домашней работы есть ссылка на исходные файлы в репозитории
- Все задания выполнены в одном файле, в который импортируется массив
  пользователей.
- Имена переменных и функций понятные, описательные
- Код отформатирован с помощью Prettier

# ТЗ

Напиши функции которые с помощью перебирающих методов массива (никаких `for`,
`splice` и т. д.) выполняют следующие операции над массивом объектов
пользователей из файла [users.js](./users.js).

# Задание 1

Получить массив имен всех пользователей (поле `name`).

```js
const getUserNames = users => {
  // твой код
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
```

# Задание 2

Получить массив объектов пользователей по цвету глаз (поле `eyeColor`).

```js
const getUsersWithEyeColor = (users, color) => {
  // твой код
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
```

# Задание 3

Получить массив имен пользователей по полу (поле `gender`).

```js
const getUsersWithGender = (users, gender) => {
  // твой код
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
```

# Задание 4

Получить массив только неактивных пользователей (поле `isActive`).

```js
const getInactiveUsers = users => {
  // твой код
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
```

# Задание 5

Получить пользоваля (не массив) по `email` (поле `email`, он уникальный).

```js
const getUserWithEmail = (users, email) => {
  // твой код
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
```

# Задание 6

Получить массив пользователей попадающих в возрастную категорию от `min` до
`max` лет (поле `age`).

```js
const getUsersWithAge = (users, min, max) => {
  // твой код
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
```

# Задание 7

Получить общую сумму баланса (поле `balance`) всех пользователей.

```js
const calculateTotalBalance = users => {
  // твой код
};

console.log(calculateTotalBalance(users)); // 20916
```

# Задание 8

Массив имен всех пользователей у которых есть друг с указанным именем.

```js
const getUsersWithFriend = (users, friendName) => {
  // твой код
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
```

# Задание 9

Массив имен (поле `name`) людей, отсортированных в зависимости от количества их
друзей (поле `friends`)

```js
const getNamesSortedByFriendsCount = users => {
  // твой код
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
```

# Задание 10

Получить массив всех умений всех пользователей (поле `skills`), при этом не
должно быть повторяющихся умений и они должны быть отсортированы в алфавитном
порядке.

```js
const getSortedUniqueSkills = users => {
  // твой код
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
```
