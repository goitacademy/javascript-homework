**Read in other languages: [Русский](README.md), [Українська](README.ua.md),
[English](README.en.md), [Español](README.es.md), [Polski](README.pl.md).**

# Kryteria przyjęcia

- Utworzono repozytorium `goit-js-hw-07`.
- Przy oddaniu pracy domowej dołączono linki: do plików źródłowych i strony 
  roboczej na `GitHub Pages`.
- Wiersz poleceń nie zawiera błędów i ostrzeżeń.
- Nazwy zmiennych i funkcji są zrozumiałe, opisowe.
- Kod sformatowano `Prettier`.

## Pliki startowe

- W [folderze src](./src) najdziesz pliki startowe z gotowym znacznikiem i gotowymi
  stylami. Skopiuj je do swojego projektu. Aby to zrobić, pobierz całe repozytorium jako 
  archiwum lub użyj [serwisu DownGit](https://downgit.github.io/) aby
  pobrać oddzielny folder z repozytorium.
- W pliku `gallery-items.js` znajduje się tablica `galleryItems`, która zawiera
  obiekty z informacją o obrazkach: małe (miniatura), oryginalne
  (duże) i opis. Już podłączyliśmy ją do każdego z plików JS projektu.

## Zadanie 1 - galeria obrazów

Utwórz galerię z możliwością kliknięcia w jej elementy i przeglądania pełnego
obrazu w oknie modalnym. Obejrzyj wideo-demo działania galerii.

https://user-images.githubusercontent.com/17479434/127711719-4e293f5b-fbaa-4851-8671-fc841963d961.mp4

Wykonaj to zadanie w plikach `01-gallery.html` i `01-gallery.js`. Rozbij je na
kilka podzadań:

1. Tworzenie i renderowanie znacznika zgodnie z tablicą danych `galleryItems` i
   dostarczonym szablonem elementu galerii.
2. Implementacja delegowania na `div.gallery` i otrzymanie `url` większego
   obrazu.
3. Połączenie skryptu i stylów biblioteki okna modalnego
   [basicLightbox](https://basiclightbox.electerious.com/). Użyj
   [CDN serwisu jsdelivr](https://www.jsdelivr.com/package/npm/basiclightbox?path=dist)
   i dodaj do projektu linki do minimalizowania (`.min`) plików biblioteki.
4. Otworzenie okna modalnego po kliknięciu w element galerii. Aby to zrobić, zapoznaj się z
   [dokumentacją](https://github.com/electerious/basicLightbox#readme) i
   [przykładami](https://basiclightbox.electerious.com/).
5. Zmiana wartości atrybutu `src` elementu `<img>` w oknie modalnym przed
   otworzeniem. Użyj gotowego znacznika okna modalnego z obrazkiem z
   przykładów biblioteki [basicLightbox](https://basiclightbox.electerious.com/).

### Znacznik elementu galerii

Link do oryginalnego obrazka powinien być przechowywany w atrybucie data `source` w
elemencie `<img>`, i ukazywać się w `href` linku. Nie dodawaj innych tagów HTML
lub klas CSS oprócz tych, które znajdują się w tym szablonie.

```html
<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>
```

Zwróc uwagę na to, że obrazek zamieniono w link, a więc po
domyślnym kliknięciu użytkownik zostanie przekierowany na inną stronę. Zablokuj to
postępowanie domyślnie.


### Zamknięcie z klawiatury

> ⚠️ Следующий функционал не обязателен при сдаче задания, но будет хорошей
> дополнительной практикой.

Добавь закрытие модального окна по нажатию клавиши `Escape`. Сделай так, чтобы
прослушивание клавиатуры было только пока открыто модальное окно. У библиотеки
[basicLightbox](https://basiclightbox.electerious.com/) есть метод для
программного закрытия модального окна.

## Задание 2 - библиотека `SimpleLightbox`

Сделай такую же галерею как в первом задании, но используя библиотеку
[SimpleLightbox](https://simplelightbox.com/), которая возьмет на себя обработку
кликов по изображениям, открытие и закрытие модального окна, а также
пролистывание изображений при помощи клавиатуры.

https://user-images.githubusercontent.com/17479434/127714821-4b7527c8-01db-42d3-83f0-8c1578561982.mp4

Необходимо немного изменить разметку карточки галереи, используй этот шаблон.

```html
<a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>
```

Выполняй это задание в файлах `02-lightbox.html` и `02-lightbox.js`. Разбей его
на несколько подзадач:

1. Создание и рендер разметки по массиву данных `galleryItems` и
   предоставленному шаблону элемента галереи. Используй готовый код из первого
   задания.
2. Подключение скрипта и стилей библиотеки используя
   [CDN сервис cdnjs](https://cdnjs.com/libraries/simplelightbox). Необходимо
   добавить ссылки на два файла: `simple-lightbox.min.js` и
   `simple-lightbox.min.css`.
3. Инициализация библиотеки после того как элементы галереи созданы и добавлены
   в `div.gallery`. Для этого ознакомься с документацией
   [SimpleLightbox](https://simplelightbox.com/) - в первую очередь секции
   «Usage» и «Markup».
4. Посмотри в документации секцию «Options» и добавь отображение подписей к
   изображениям из атрибута `alt`. Пусть подпись будет снизу и появляется через
   250 миллисекунд после открытия изображения.
