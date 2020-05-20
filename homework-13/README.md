**Читать на других языках: [Русский](README.md), [Українська](README.ua.md).**

# Критерии приема

- Созданы репозитории `goit-js-hw-13-image-finder`.
- При сдаче домашней работы есть две ссылки для каждого проекта: на исходные
  файлы и рабочую страницу на GitHub pages.
- При посещении рабочей страницы (GitHub pages) задания, в консоли нету ошибок и
  предупреждений
- Имена переменных и функций понятные, описательные
- Проект собран с помощью `Webpack`
- Код отформатирован с помощью `Prettier`
- Добавь минимальную стилизацию
- Есть файл `apiService.js` с дефолтным экспортом объекта отвечающего за логику
  HTTP-запросов к API

## Задание - поиск изображений

Напиши небольшое приложение поиска и просмотра изображений по ключевому слову

## Инструкции Pixabay API

Для HTTP-запросов используй публичный
[Pixabay API](https://pixabay.com/api/docs/). Зарегистрируйся и получи ключ.

URL-строка запроса:

```bash
https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ
```

Pixabay API поддерживает пагинацию, пусть в ответе приходит по 12 объектов,
установлено в параметре `per_page`. По умолчанию параметр `page` равен `1`. При
каждом последующем запросе `page` увеличивается на 1, а при поиске по новому
ключевому слову необходимо сбрасывать его значение в `1`.

Каждое изобаржение описывается объектом.

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

Тебе интересны следующие свойства:

- `webformatURL` - ссылка на маленькое изображение для списка карточек
- `largeImageURL` - ссылка на большое изображение (смотри пункт 'дополнительно')
- `likes` - количество лайков
- `views` - количество просмотров
- `comments` - количество комментариев
- `downloads` - количество загрузок

## Форма поиска

Создает DOM-элемент следующей структуры. Можно использовать шаблонизацию.

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

## Галерея изображений

Создает DOM-элемент следующей структуры.

```html
<ul class="gallery">
  <!-- Список <li> с карточками изображений -->
</ul>
```

## Карточка изображения

Создает DOM-элемент следующей структуры.

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

Для иконок используются
[Material icons](https://google.github.io/material-design-icons/). Для их
корректной работы достаточно в HTML-файле добавить ссылку на веб-шрифт.

```html
<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
/>
```

Или добавив npm-пакет `material-design-icons` и импортировав веб-шрифт в
`index.js`.

## Кнопка 'Load more'

При нажатии на кнопку `Load more` должна догружаться следующая порция
изображений и рендериться вместе с предыдущими.

Страница должна автоматически плавно проскроливаться после рендера изображений
ровно на один экран, чтобы перевести пользователя на начало загруженных
изображений. Используй
[window.scrollTo()](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo).

## Дополнительно

- Можно добавить плагин нотификаций, например
  [pnotify](https://github.com/sciactive/pnotify), и показывать нотификации на
  результат HTTP-запросов
- Можно добавить функционал отображения большой версии изображения через плагин
  модального окна, например
  [basicLightbox](https://basiclightbox.electerious.com/), при клике на
  изображение галереи
- Вместо кнопки `Load more` можно сделать бесконечную загрузку при скроле
  используя плагин [Infinite Scroll](https://infinite-scroll.com/)
