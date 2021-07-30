**Read in other languages: [Русский](README.md), [Українська](README.ua.md),
[English](README.en.md), [Español](README.es.md), [Polski](README.pl.md).**

# Критерии приема

- Создан репозиторий `goit-js-hw-08`.
- При сдаче домашней работы есть две ссылки: на исходные файлы и рабочую
  страницу на `GitHub Pages`.
- При посещении живой страницы задания, в консоли нету ошибок и предупреждений.
- Проект собран с помощью
  [parcel-project-template](https://github.com/goitacademy/parcel-project-template).
- Код отформатирован `Prettier`.

## Стартовые файлы

В [папке src](./src) ты найдешь стартовые файлы с готовой разметкой, стилями и
подключенными файлами скриптов для каждого задания. Скопируй их себе в проект,
полностью заменив папку `src` в
[parcel-project-template](https://github.com/goitacademy/parcel-project-template).
Для этого скачай весь этот репозиторий как архив или используй
[сервис DownGit](https://downgit.github.io/) для скачивания отдельной папки из
репозитория.

## Задание 1 - библиотека `SimpleLightbox`

Выполняй это задание в файлах `01-gallery.html` и `01-gallery.js`. Разбей его на
несколько подзадач:

1. Добавь библиотеку [SimpleLightbox](https://simplelightbox.com/) как
   зависимость проекта используя `npm` (ссылка на CDN из твоей прошлой работы
   больше не нужна).
2. Используй свой JavaScript код из предыдущей домашней работы, но выполни
   рефакторинг с учетом того, что библиотека была установлена через `npm`
   (синтаксис import/export).

Для того чтобы подключить CSS код библиотеки в проект, необходимо добавить еще
один импорт, кроме того который описан в документации.

```js
// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
```

## Задание 2 - видео плеер

В HTML есть `<iframe>` с видео для Vimeo плеера. Напиши скрипт который будет
сохранять текущее время воспроизведения видео в локальное хранилище и, при
перезагрузке страницы, продолжать воспроизводить видео с этого времени.

```html
<iframe
  id="vimeo-player"
  src="https://player.vimeo.com/video/236203659"
  width="640"
  height="360"
  frameborder="0"
  allowfullscreen
  allow="autoplay; encrypted-media"
></iframe>
```

Выполняй это задание в файлах `02-video.html` и `02-video.js`. Разбей его на
несколько подзадач:

1. Ознакомься с
   [документацией](https://github.com/vimeo/player.js/#vimeo-player-api)
   библиотеки Vimeo плеера.
2. Добавь библиотеку как зависимость проекта через `npm`.
3. Инициализируй плеер в файле скрипта как это описано в секции
   [pre-existing player](https://github.com/vimeo/player.js/#pre-existing-player),
   но учти что у тебя плеер добавлен как npm пакет, а не через CDN.
4. Разбери документацию метода
   [on()](https://github.com/vimeo/player.js/#onevent-string-callback-function-void)
   и начни отслеживать событие
   [timeupdate](https://github.com/vimeo/player.js/#events) - обновление времени
   воспроизведения.
5. Сохраняй время воспроизведения в локальное хранилище. Пусть ключом для
   хранилища будет строка `"videoplayer-current-time"`.
6. При перезагрузке страницы воспользуйся методом
   [setCurrentTime()](https://github.com/vimeo/player.js/#setcurrenttimeseconds-number-promisenumber-rangeerrorerror)
   для того чтобы возобновить воспроизведение с сохраненной позиции.
7. Добавь в проект бибилотеку
   [lodash.throttle](https://www.npmjs.com/package/lodash.throttle) и сделай
   так, чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в
   секунду.

## Задание 3 - форма обратной связи

В HTML есть разметка формы. Напиши скрипт который будет сохранять значения полей
в локальное хранилище когда пользователь что-то печатает.

```html
<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>
```

Выполняй это задание в файлах `03-feedback.html` и `03-feedback.js`. Разбей его
на несколько подзадач:

1. Отслеживай на форме событие `input`, и каждый раз записывай в локальное
   хранилище объект с полями `email` и `password`, в которых сохраняй текущие
   значения полей формы. Пусть ключом для хранилища будет строка
   `"feedback-form-state"`.
2. При загрузке страницы проверяй состояние хранилища, и если там есть
   сохраненные данные, заполняй ими поля формы. В противном случае поля должны
   быть пустыми.
3. При сабмите формы очищай хранилище и поля формы, а также выводи объект с
   полями `email`, `password` и текущими их значениями в консоль.
4. Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд.
   Для этого добавь в проект и используй библиотеку
   [lodash.throttle](https://www.npmjs.com/package/lodash.throttle).
