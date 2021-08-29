**Read in other languages: [Русский](README.md), [Українська](README.ua.md),
[English](README.en.md), [Español](README.es.md), [Polski](README.pl.md).**

# Kryterium przyjęcia

- Utworzono repozytorium `goit-js-hw-11`.
- Przy oddaniu pracy domowej dołączono linki: do plików źródłowych i strony
  roboczej na `GitHub Pages`.
- Wiersz poleceń nie zawiera błędów i ostrzeżeń.
- Projekt utworzono z pomocą
  [parcel-project-template](https://github.com/goitacademy/parcel-project-template).
- Do żądań HTTP użyto biblioteki [axios](https://axios-http.com/).
- Użyto składni `async/await`.
- Do powiadomień użyto biblioteki
  [notiflix](https://github.com/notiflix/Notiflix#readme).
- Sformatowano kod `Prettier`.

# Zadanie - wyszukiwanie obrazów

Utwórz frontend aplikacji wyszukiwania i przeglądania obrazków według słów
kluczowych. Popraw wizualnie elementy interfejsu. Obejrzyj wersję demonstracyjną wideo o działaniu
aplikacji.

https://user-images.githubusercontent.com/17479434/125040406-49a6f600-e0a0-11eb-975d-e7d8eaf2af6b.mp4

## Formularz wyszukiwania

Formularz początkowo znajduje się w dokumencie HTML. Użytkownik będzie wprowadzał treść, którą chce
wyszukać, w pole tekstowe, a po wysłaniu formularza koniecznym jest spełnienie żądania HTTP.

```html
<form class="search-form" id="search-form">
  <input
    type="text"
    name="searchQuery"
    autocomplete="off"
    placeholder="Search images..."
  />
  <button type="submit">Search</button>
</form>
```

## Żądania HTTP

Jako backendu używaj publicznego API serwisu
[Pixabay](https://pixabay.com/api/docs/). Zarejestruj się, otrzymaj swój
unikalny klucz dostępu i zapoznaj się z dokumentacją.

Lista parametrów treści żądania, które należy podać:

- `key` - Twój unikalny klucz dostępu do API.
- `q` - termin, który chce się wyszukać. To, co będzie wpisywał użytkownik.
- `image_type` - typ obrazka. Chcemy tylko zdjęć, dlatego określ
  wartość `photo`.
- `orientation` - orientacja zdjęcia. Określ wartość `horizontal`.
- `safesearch` - weryfikacja wieku. Określ wartość `true`.

W odpowiedzi pojawi się tablica obrazów odpowiadających kryteriom parametrów żądania.
Każdy obraz opisany jest obiektem, z których interesują cię tylko
następujące właściwości:

- `webformatURL` - link do małego obrazka.
- `largeImageURL` - link do dużego obrazka.
- `tags` - wiersz z opisem obrazka. Będzie pasować do atrybutu `alt`.
- `likes` - liczba lajków.
- `views` - liczba wyświetleń.
- `comments` - liczba komentarzy.
- `downloads` - liczba pobrań.

Jeśli backend przekazuje pustą tablicę, oznacza to, że nic odpowiedniego nie znaleziono.
W takim wypadku pokaż powiadomienie o treści
`"Sorry, there are no images matching your search query. Please try again."`.
Do powiadomień używaj biblioteki
[notiflix](https://github.com/notiflix/Notiflix#readme).

## Galeria i obraz karty

Element `div.gallery` znajduje się początkowo w dokumencie HTML, należy
wykonać w nim znacznik obrazu karty. Przy wyszukiwaniu według nowego słowa kluczowego,
należy całkowicie wyczyścić zawartość galerii, aby nie mieszać wyników.

```html
<div class="gallery">
  <!-- Obraz karty -->
</div>
```

Szablon znacznika karty jednego obrazka do galerii.

```html
<div class="photo-card">
  <img src="" alt="" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
    </p>
    <p class="info-item">
      <b>Views</b>
    </p>
    <p class="info-item">
      <b>Comments</b>
    </p>
    <p class="info-item">
      <b>Downloads</b>
    </p>
  </div>
</div>
```

## Paginacja

Pixabay API podtrzymuje paginację i dostarcza parametry `page` i
`per_page`. Zrób tak, aby w każdej odpowiedzi pojawiało się po 40 obiektów 
(domyślnie 20).

- Początkowo wartość parametru `page` powinna wynosić `1`.
- Przy każdym kolejnym żądaniu, koniecznym jest zwiększenie wartości o `1`.
- Przy wyszukiwaniu według nowego słowa kluczowego wartość `page` należy cofnąć do początkowego stanu,
  ponieważ będzie miała miejsce paginacja według nowej kolekcji obrazków.

W dokumencie HTML istnieje już znacznik przycisku, po kliknięciu którego koniecznym jest
spełnienie żądania według następnej grupy obrazków i dodanie znacznika do już
istniejących elementów galerii.

```html
<button type="button" class="load-more">Load more</button>
```

- Początkowo przycisk powinien być ukryty.
- Po pierwszym żądaniu przycisk pojawia się w interfejsie pod galerią.
- Po ponownym wysłaniu formularza przycisk najpierw się ukrywa, a po spełnieniu żądania ponownie
  się wyświetla.

W odpowiedzi backend przekazuje właściwość `totalHits` - wspólną liczbę obrazków,
które odpowiadają kryteriom wyszukiwania (dla bezpłatnego konta). Jeśli
użytkownik doszedł do końca kolekcji, ukryj przycisk i pokaż powiadomienie o
treści `"We're sorry, but you've reached the end of search results."`.

## Dodatkowo

> ⚠️ Następna funkcja nie jest obowiązkowa przy oddawaniu zadania, ale będzie dobrą
> dodatkową praktyką.

### Powiadomienie

Po pierwszym żądaniu przy każdym nowym wyszukiwaniu pokaż powiadomienie, w którym
będzie napisane ile w sumie znaleziono obrazków (właściwość `totalHits`). Tekst
powiadomienia `"Hooray! We found totalHits images."`

### Biblioteka `SimpleLightbox`

Dodaj funkcję wyświetlania większej wersji obrazka z biblioteką
[SimpleLightbox](https://simplelightbox.com/).

- W znaczniku trzeba będzie zamienić każdy obraz karty w link, tak jak
  pokazano w dokumentacji.
- Biblioteka zawiera metodę `refresh()` którą trzeba koniecznie zrealizować za każdym
  razem po dodaniu nowej grupy obrazów karty.

Aby połączyć kod CSS biblioteki z projektem, koniecznym jest dodanie jeszcze
jednego importu, oprócz tego opisanego w dokumentacji.

```js
// Opisany w dokumentacji
import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';
```

### Przewijanie strony

Stwórz płynne przewijanie strony po spełnieniu żądania i po renderowaniu każdej następnej 
grupy obrazków. Oto kod-wskazówka, uporaj się z nią samodzielnie.

```js
const { height: cardHeight } = document
  .querySelector('.gallery')
  .firstElementChild.getBoundingClientRect();

window.scrollBy({
  top: cardHeight * 2,
  behavior: 'smooth',
});
```

### Nieskończone przewijanie

Zamiast przycisku «Load more» można zrobić nieskończone przewijanie obrazów podczas
przewijania strony. Zapewniamy Ci pełną swobodę w realizacji,
możesz użyć dowolnej biblioteki.
