**Read in other languages: [Русский](README.md), [Українська](README.ua.md),
[English](README.en.md), [Español](README.es.md), [Polski](README.pl.md).**

# Kryteria przyjęcia

- Utworzono repozytorium `goit-js-hw-07`.
- Przy oddaniu pracy domowej dołączono linki: do plików źródłowych i strony 
  roboczej na `GitHub Pages`.
- Wiersz poleceń nie zawiera błędów i ostrzeżeń.
- Nazwy zmiennych i funkcji są zrozumiałe, opisowe.
- Sformatowano kod `Prettier`.

## Pliki startowe

- W [folderze src](./src) znajdziesz pliki startowe z gotowym znacznikiem i gotowymi
  stylami. Skopiuj je do swojego projektu. Aby to zrobić, pobierz całe repozytorium jako 
  archiwum lub użyj [serwisu DownGit](https://downgit.github.io/) aby
  pobrać oddzielny folder z repozytorium.
- W pliku `gallery-items.js` znajduje się tablica `galleryItems`, która zawiera
  obiekty z informacją o obrazkach: małe (miniatura), oryginalne
  (duże) i opis. Już połączyliśmy ją z każdym z plików JS projektu.

## Zadanie 1 - galeria obrazów

Utwórz galerię z możliwością kliknięcia w jej elementy i przeglądania pełnego
obrazu w oknie modalnym. Obejrzyj wersję demonstracyjną wideo o działaniu galerii.

https://user-images.githubusercontent.com/17479434/127711719-4e293f5b-fbaa-4851-8671-fc841963d961.mp4

Wykonuj to zadanie w plikach `01-gallery.html` i `01-gallery.js`. Rozbij je na
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
   otworzeniem. Użyj gotowego znacznika okna modalnego z obrazem z
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

Zwróć uwagę na to, że obrazek zamieniono w link, a więc po
domyślnym kliknięciu użytkownik zostanie przekierowany na inną stronę. Zablokuj to
postępowanie domyślnie.


### Zamknięcie z klawiatury

> ⚠️ Następna funkcja nie jest obowiązkowa przy oddawaniu zadania, ale będzie dobrą
> dodatkową praktyką.

Dodaj zamknięcie okna modalnego po naciśnięciu klawiszy `Escape`. Zrób tak, aby
nasłuchiwanie klawiatury było aktywne tylko wtedy, gdy otwarte jest okno modalne. W bibliotece
[basicLightbox](https://basiclightbox.electerious.com/) istnieje metoda na
programowe zamknięcie okna modalnego.

## Zadanie 2 - biblioteka `SimpleLightbox`

Utwórz taką samą galerię jak w zadaniu pierwszym, używając jednak biblioteki
[SimpleLightbox](https://simplelightbox.com/), która zajmie się opracowaniem
kliknięć w obrazki, otwieraniem i zamykaniem okna modalnego oraz
przewijaniem obrazków za pomocą klawiatury.

https://user-images.githubusercontent.com/17479434/127714821-4b7527c8-01db-42d3-83f0-8c1578561982.mp4

Konieczna jest nieznaczna zmiana znacznika galerii, użyj tego szablonu.

```html
<a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>
```

Wykonuj to zadanie w plikach `02-lightbox.html` i `02-lightbox.js`. Rozbij je
na kilka podzadań:

1. Tworzenie i renderowanie znacznika zgodnie z tablicą danych `galleryItems` i
   dostarczonym szablonem elementu galerii. Użyj gotowego kodu z zadania
   pierwszego.
2. Połączenie skryptu i stylów biblioteki poprzez użycie
   [CDN serwisu cdnjs](https://cdnjs.com/libraries/simplelightbox). Koniecznym jest
   dodanie linków do dwóch plików: `simple-lightbox.min.js` i
   `simple-lightbox.min.css`.
3. Inicjalizacja biblioteki po utworzeniu elementów galerii i dodaniu ich
   do `div.gallery`. Aby to zrobić, zapoznaj się z dokumentacją
   [SimpleLightbox](https://simplelightbox.com/) - najpierw sekcje
   «Usage» i «Markup».
4. W dokumentacji zwróć uwagę na sekcję «Options» i dodaj wyświetlanie podpisów do
   obrazków z atrybutu `alt`. Niech podpis będzie pod spodem i pojawia się po
   250 milisekundach po otwarciu obrazka.
