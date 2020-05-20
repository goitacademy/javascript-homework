**Читать на других языках: [Русский](README.md), [Українська](README.ua.md).**

# Критерії прийому

- Створено репозиторії `goit-js-hw-13-image-finder`.
- При здачі домашньої роботи є два посилання для кожного проєкту: на вихідні
    файли і робочу сторінку на GitHub pages.
- При відвідуванні робочої сторінки (GitHub pages) завдання, в консолі немає
  помилок і попереджень
- Імена змінних і функцій зрозумілі, описові
- Проєкт зібраний за допомогою `Webpack`
- Код відформатований за допомогою `Prettier`
- Додай мінімальну стилізацію
- Є файл `apiService.js` з дефолтним експортом об'єкта відповідає за логіку
  HTTP-запитів до API

## Завдання - пошук зображень

Напиши невеликий додаток пошуку і перегляду зображень за ключовим словом

## Інструкції Pixabay API

Для HTTP-запитів використовуй публічний
[Pixabay API](https://pixabay.com/api/docs/). Зареєструйся та отримай ключ.

URL-рядок запиту:

```bash
https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ
```

Pixabay API підтримує пагінацію, нехай у відповіді приходить по 12 об'єктів,
встановлено в параметрі `per_page`. За замовчуванням `page` дорівнює `1`. При
кожному наступному запиті `page` збільшується на 1, а при пошуку по новому
ключовим словом необхідно скидати його значення в `1`.

Кожне зображення описується об'єктом.

```json
{
  "comments": 78,
  "downloads": 63296,
  "favorites": 558,
  "id": 1508613,
  "imageHeight": 2135,
  "imageSize": 1630104,
  "imageWidth": 2894,
  "largeImageURL": "https://pixabay.com/get/57e5d54b4c53af14f6da8c7dda793376173cd8e7524c704c702873dc9f44c551_1280.jpg",
  "likes": 575,
  "pageURL": "https://pixabay.com/photos/cat-animal-cat-portrait-cat-s-eyes-1508613/",
  "previewHeight": 110,
  "previewURL": "https://cdn.pixabay.com/photo/2016/07/10/21/47/cat-1508613_150.jpg",
  "previewWidth": 150,
  "tags": "cat, animal, cat portrait",
  "type": "photo",
  "user": "cocoparisienne",
  "userImageURL": "https://cdn.pixabay.com/user/2018/11/26/11-06-29-714_250x250.jpg",
  "user_id": 127419,
  "views": 127450,
  "webformatHeight": 472,
  "webformatURL": "https://pixabay.com/get/57e5d54b4c53af14f6da8c7dda793376173cd8e7524c704c702873dc9f44c551_640.jpg",
  "webformatWidth": 640
}
```

Тобі цікаві такі властивості:

- `webformatURL` - посилання на маленьке зображення для списку карток
- `largeImageURL` - посилання на велике зображення (дивись пункт 'додатково')
- `likes` - кількість лайків
- `views` - кількість переглядів
- `comments` - кількість коментарів
- `downloads` - кількість завантажень

## Форма пошуку

Створює DOM-елемент такої структури. Можна використовувати шаблонізацію.

```html
<form class="search-form" id="search-form">
  <input
    type="text"
    name="query"
    autocomplete="off"
    placeholder="Search images..."
  />
</form>
```

## Галерея зображень

Створює DOM-елемент такої структури.

```html
<ul class="gallery">
  <!-- Список <li> з картками зображень -->
</ul>
```

## Картка зображення

Створює DOM-елемент такої структури.

```html
<div class="photo-card">
  <img src="" alt="" />

  <div class="stats">
    <p class="stats-item">
      <i class="material-icons">thumb_up</i>
      1108
    </p>
    <p class="stats-item">
      <i class="material-icons">visibility</i>
      320321
    </p>
    <p class="stats-item">
      <i class="material-icons">comment</i>
      129
    </p>
    <p class="stats-item">
      <i class="material-icons">cloud_download</i>
      176019
    </p>
  </div>
</div>
```

Для іконок використовуються
[Material icons](https://google.github.io/material-design-icons/). Для їх
коректної роботи досить в HTML-файлі додати посилання на веб-шрифт.

```html
<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
/>
```

Або додавши npm-пакет `material-design-icons` і імпортувавши веб-шрифт в
`index.js`.

## Кнопка 'Load more'

При натисканні на кнопку `Load more` повинна довантажуватися наступна порція
зображень і рендеритися разом з попередніми.

Сторінка повинна автоматично плавно проскролюватися після рендера зображень
рівно на один екран, щоб перевести користувача на початок завантажених
зображень. Використовуй
[window.scrollTo()](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo).

## Додатково

- Можна додати плагін нотифікацій, наприклад
  [pnotify](https://github.com/sciactive/pnotify), і показувати нотифікації на
    результат HTTP-запитів
- Можна додати функціонал відображення великої версії зображення через плагін
    модального вікна, наприклад
  [basicLightbox](https://basiclightbox.electerious.com/), при кліці на
    зображення галереї
- Замість кнопки `Load more` можна зробити нескінченне завантаження при скролі
    використовуючи плагін [Infinite Scroll](https://infinite-scroll.com/)
