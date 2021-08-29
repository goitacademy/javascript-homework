**Read in other languages: [Русский](README.md), [Українська](README.ua.md),
[English](README.en.md), [Español](README.es.md), [Polski](README.pl.md).**

# Kryteria przyjęcia

- Utworzono repozytorium `goit-js-hw-08`.
- Przy oddaniu pracy domowej dołączono linki: do plików źródłowych i strony 
  roboczej na `GitHub Pages`.
- Wiersz poleceń nie zawiera błędów i ostrzeżeń.
- Projekt utworzono z pomocą
  [parcel-project-template](https://github.com/goitacademy/parcel-project-template).
- Sformatowano kod `Prettier`.

## Pliki startowe

W [folderze src](./src) znajdziesz pliki startowe z gotowym znacznikiem, stylami i
połączonymi plikami skryptów dla każdego zadania. Skopiuj je do swojego projektu,
całkowicie zamieniając folder `src` w
[parcel-project-template](https://github.com/goitacademy/parcel-project-template).
Aby to zrobić, pobierz całe repozytorium jako archiwum lub użyj
[serwisu DownGit](https://downgit.github.io/) aby pobrać oddzielny folder z 
repozytorium.

## Zadanie 1 - biblioteka `SimpleLightbox`

Wykonuj to zadanie w plikach `01-gallery.html` i `01-gallery.js`. Rozbij je na 
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
zapisywał aktualny czas odtwarzania wideo w local storage i, podczas
przeładowywania strony, kontynuuje odtwarzanie wideo od danego momentu.

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

Wykonuj to zadanie w plikach `02-video.html` i `02-video.js`. Rozbij je na
kilka podzadań:

1. Zapoznaj się z
   [dokumentacją](https://github.com/vimeo/player.js/#vimeo-player-api)
   biblioteki odtwarzacza Vimeo.
2. Dodaj bibliotekę jako zależność projektu poprzez `npm`.
3. Inicjalizuj odtwarzacz w pliku skryptu tak, jak opisano w sekcji
   [pre-existing player](https://github.com/vimeo/player.js/#pre-existing-player),
   ale weź pod uwagę to, że odtwarzacz dodano jako pakiet npm, a nie poprzez CDN.
4. Zbadaj dokumentację metody
   [on()](https://github.com/vimeo/player.js/#onevent-string-callback-function-void)
   i zacznij śledzić zdarzenie
   [timeupdate](https://github.com/vimeo/player.js/#events) - aktualizacja czasu
   odtwarzania.
5. Zapisuj czas odtwarzania w local storage. Niech kluczem do
   storage będzie `"videoplayer-current-time"`.
6. Do przeładowywania strony używaj metody
   [setCurrentTime()](https://github.com/vimeo/player.js/#setcurrenttimeseconds-number-promisenumber-rangeerrorerror)
   aby wznowić odtwarzanie od zapisanego momentu.
7. Dodaj do projektu bibliotekę
   [lodash.throttle](https://www.npmjs.com/package/lodash.throttle) i zrób
   tak, aby czas odtwarzania aktualizował się w storage nie częściej niż raz na
   sekundę.

## Zadanie 3 - formularz kontaktowy

W HTML znajduje się znacznik formularza. Napisz skrypt, który będzie zapisywał wartości pól
w local storage, gdy użytkownik coś wpisuje.

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

Wykonuj to zadanie w plikach `03-feedback.html` i `03-feedback.js`. Rozbij je
na kilka podzadań:

1. Śledź w formularzu zdarzenie `input`, i za każdym razem zapisuj w local
   storage obiekt z polami `email` i `password`, w których przechowuj aktualne
   wartości pól formularza. Niech kluczem do storage będzie
   `"feedback-form-state"`.
2. Podczas przeładowywania strony sprawdzaj stan storage i jeśli są tam
   zapisane dane, wypełniaj nimi pola formularza. W przeciwnym wypadku pola powinny
   być puste.
3. Po wysłaniu formularza wyczyść storage i pola formularza, a także wprowadź obiekt z
   polami `email`, `password` i ich aktualnymi wartościami do wiersza poleceń.
4. Zrób tak, aby storage aktualizował się nie częściej niż raz na 500 milisekund.
   Aby to zrobić, użyj biblioteki
   [lodash.throttle](https://www.npmjs.com/package/lodash.throttle) i dodaj ją do projektu.
