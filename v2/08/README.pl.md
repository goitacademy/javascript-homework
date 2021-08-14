**Read in other languages: [Русский](README.md), [Українська](README.ua.md),
[English](README.en.md), [Español](README.es.md), [Polski](README.pl.md).**

# Kryteria przyjęcia

- Utworzono repozytorium `goit-js-hw-08`.
- Przy oddaniu pracy domowej dołączono linki: do plików źródłowych i strony 
  roboczej na `GitHub Pages`.
- Wiersz poleceń nie zawiera błędów i ostrzeżeń.
- Projekt utworzono z pomocą
  [parcel-project-template](https://github.com/goitacademy/parcel-project-template).
- Kod sformatowano `Prettier`.

## Pliki startowe

W [folderze src](./src) znajdziesz pliki startowe z gotowym znacznikiem, stylami i
połączonymi plikami skryptów dla każdego zadania. Skopiuj je do swojego projektu,
całkowicie zamieniając folder `src` w
[parcel-project-template](https://github.com/goitacademy/parcel-project-template).
Aby to zrobić, pobierz całe repozytorium jako archiwum lub użyj
[serwisu DownGit](https://downgit.github.io/) aby pobrać oddzielny folder z 
repozytorium.

## Zadanie 1 - biblioteka `SimpleLightbox`

Wykonaj to zadanie w plikach `01-gallery.html` i `01-gallery.js`. Rozbij je na 
kilka podzadań:

1. Dodaj bibliotekę [SimpleLightbox](https://simplelightbox.com/) jako
   zależność projektu używając `npm` (link do CDN z Twojej poprzedniej pracy
   nie jest już potrzebny).
2. Użyj swojego kodu JavaScript z poprzedniej pracy domowej, ale zrealizuj
   refaktoryzację uwzględniając to, że biblioteka została zainstalowana przez `npm`
   (składnia import/export).

Aby umieścić kod CSS biblioteki w projekcie, należy dodać jeszcze
jeden import, oprócz tego opisanego w dokumentacji.

```js
// Opisany w dokumentacji
import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';
```

## Zadanie 2 - odtwarzacz wideo

W HTML znajduje się `<iframe>` z wideo na Vimeo. Napisz skrypt, który będzie
przechowywał aktualny czas odtwarzania wideo в локальное хранилище и, при
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
