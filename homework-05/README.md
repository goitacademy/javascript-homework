# Практические задания

- [Задание 1](https://codepen.io/goit-fe-adv/pen/BrPBrm?editors=0010)
- [Задание 2](https://codepen.io/goit-fe-adv/pen/oqMNLW?editors=0010)
- [Задание 3](https://codepen.io/goit-fe-adv/pen/pLZzMY?editors=0010)
- [Задание 4](https://codepen.io/goit-fe-adv/pen/MVBWYM?editors=0010)
- [Задание 5](https://codepen.io/goit-fe-adv/pen/bvjGLJ?editors=0010)
- [Задание 6](https://codepen.io/goit-fe-adv/pen/PRBoVL?editors=0010)
- [Задание 7](https://codepen.io/goit-fe-adv/pen/WzKNVb?editors=0010)
- [Задание 8](https://codepen.io/goit-fe-adv/pen/zaqqZZ?editors=0010)
- [Задание 9](https://codepen.io/goit-fe-adv/pen/WywwRe?editors=0010)

# Домашнее задание

Используя массив объектов пользователей `users` (дальше в задании), напиши
функции которые с помощью перебирающих методов массивов (никаких `for`, `splice`
и т. д.) выполняют следующие операции.

## Задание 1

Получить массив имен всех пользователей (поле `name`).

```js
const getAllNames = users => {
  // твой код
};

console.log(getAllNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
```

## Задание 2

Получить массив объектов пользователей по цвету глаз (поле `eyeColor`).

```js
const getUsersByEyeColor = (users, color) => {
  // твой код
};

console.log(getUsersByEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
```

## Задание 3

Получить массив имен пользователей по полу (поле `gender`).

```js
const getUsersByGender = (users, gender) => {
  // твой код
};

console.log(getUsersByGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
```

## Задание 4

Получить массив только неактивных пользователей (поле `isActive`).

```js
const getInactiveUsers = users => {
  // твой код
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
```

## Задание 5

Получить пользоваля (не массив) по `email` (поле `email`, он уникальный).

```js
const getUserByEmail = (users, email) => {
  // твой код
};

console.log(getUserByEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserByEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
```

## Задание 6

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

## Задание 7

Получить общую сумму баланса (поле `balance`) всех пользователей.

```js
const getTotalBalance = users => {
  // твой код
};

console.log(getTotalBalance(users)); // 20916
```

## Задание 8

Массив имен всех пользователей у которых есть друг с указанным именем.

```js
const getUsersByFriend = (users, name) => {
  // твой код
};

console.log(getUsersByFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersByFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
```

# Исходные данные

Массив всех пользователей для задания.

```js
const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    guid: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];
```

# Дополнительное задание

> ⚠️ **ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ**

Получить массив всех умений всех пользователей (поле `skills`), при этом не
должно быть повторяющихся умений и они должны быть отсортированы в алфавитном
порядке

```js
const getUniqueSkills = users => {
  // твой код
};

console.log(getUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
```

Массив имен (поле `name`) людей, отсортированных в зависимости от количества их
друзей (поле `friends`)

```js
const getNamesSortedByFriendsCount = users => {
  // твой код
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
```
