**Читать на других языках: [Русский](README.md), [Українська](README.ua.md).**

# Критерії прийому

- Створено репозиторій `goit-js-hw-06`
- При здачі домашньої роботи є посилання на вихідні файли в репозиторії
- Всі завдання виконані в одному файлі, в який імпортується масив користувачів.
- Імена змінних зрозумілі, описові
- Код відформатований за допомогою Prettier

# ТЗ

Напиши функції які за допомогою перебираючих методів масиву (ніяких `for`,
`splice` і т. д.) виконують наступні операції над масивом об'єктів
користувачів з файлу [users.js](./users.js).

# Завдання 1

Отримати масив імен всіх користувачів (поле `name`).

```js
const getUserNames = users => {
  // твій код
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
```

# Завдання 2

Отримати масив об'єктів користувачів за кольором очей (поле `eyeColor`).

```js
const getUsersWithEyeColor = (users, color) => {
  // твій код
};

console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]
```

# Завдання 3

Отримати масив імен користувачів за статтю (поле `gender`).

```js
const getUsersWithGender = (users, gender) => {
  // твій код
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
```

# Завдання 4

Отримати масив тільки неактивних користувачів (поле `isActive`).

```js
const getInactiveUsers = users => {
  // твій код
};

console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]
```

# Завдання 5

Отримати користувача (не масив) по `email` (поле `email`, він унікальний).

```js
const getUserWithEmail = (users, email) => {
  // твій код
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}
```

# Завдання 6

Отримати масив користувачів, які потрапляють у вікову категорію від `min` до
`max` років (поле `age`).

```js
const getUsersWithAge = (users, min, max) => {
  // твій код
};

console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]
```

# Завдання 7

Отримати загальну суму балансу (поле `balance`) всіх користувачів.

```js
const calculateTotalBalance = users => {
  // твій код
};

console.log(calculateTotalBalance(users)); // 20916
```

# Завдання 8

Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

```js
const getUsersWithFriend = (users, friendName) => {
  // твій код
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
```

# Завдання 9

Масив імен (поле `name`) людей, відсортованих в залежності від кількості їх
друзів (поле `friends`)

```js
const getNamesSortedByFriendsCount = users => {
  // твій код
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
```

# Завдання 10

Отримати масив всіх умінь всіх користувачів (поле `skills`), при цьому не
має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному
порядку.

```js
const getSortedUniqueSkills = users => {
  // твій код
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
```
