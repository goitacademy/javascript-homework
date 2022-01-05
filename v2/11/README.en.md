**Read in other languages: [Русский](README.md), [Українська](README.ua.md), [English](README.en.md), [Español](README.es.md), [Polski](README.pl.md).**

# Acceptance criteria

- `goit-js-hw-11` repository created.
- In your submitted homework, there are two links: One to your source files and one to your working page on `GitHub Pages`.
- During live page visits, there are no errors or warnings generated in the console.
- Project built with [parcel-project-template](https://github.com/goitacademy/parcel-project-template).
- For HTTP requests, the [axios](https://axios-http.com/) library is used.
- `async/await` syntax.
- For notifications, the [notiflix](https://github.com/notiflix/Notiflix#readme) library is used.
- Code formatted with `Prettier`.

# Task - image search

Build the front-end part of a keyword search and image viewer application. Add some decoration to the interface elements. Check out the demo video of the app.

https://user-images.githubusercontent.com/17479434/125040406-49a6f600-e0a0-11eb-975d-e7d8eaf2af6b.mp4

## Search form

The form is originally in the HTML document. The user will enter a search string in the text field, and when submitting the form, an HTTP request must be made.

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

## HTTP requests

Use the public API of the [Pixabay](https://pixabay.com/api/docs/) service as a back-end. Sign up, get your unique access key and read the documentation.

Here is a list of query string parameters that you must specify:

- `key` - your unique API access key.
- `q` - search term. What the user will enter.
- `image_type` - image type. You only want photos, so set the value to `photo`.
- `orientation` - orientation of the photo. Set the value to `horizontal`.
- `safesearch` - filter by age. Set the value to `true`.

The response will contain an array of images that meet the request parameters. Each image is described by an object, and you need only the following properties:

- `webformatURL` - link to a small image for the list of cards.
- `largeImageURL` - link to a large image.
- `tags` - line with image description. Suitable for the `alt` attribute.
- `likes` - number of likes.
- `views` - number of views.
- `comments` - number of comments.
- `downloads` - number of downloads.

If the back-end returns an empty array, then there are no matches. In this case, show a notification with the text `"Sorry, there are no images matching your search query. Please try again."`. For notifications, use this library: [notiflix](https://github.com/notiflix/Notiflix#readme).

## Gallery and image card

The `div.gallery` element is originally in the HTML document, and the markup of the image cards needs to be rendered into it. When searching with a new keyword, you should completely clear the gallery content to avoid confusing results.

```html
<div class="gallery">
  <!-- Image cards -->
</div>
```

Single image card markup template for the gallery.

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

## Pagination

Pixabay API supports pagination and provides the `page` and `per_page` parameters. Make it so that each response contains 40 objects (20 by default).

- Initially, the `page` parameter value must be `1`.
- With each subsequent request, it must be increased by `1`.
- When searching with a new keyword, the value of `page` must be reset to its initial value, since there will be pagination for a new collection of images.

The HTML document already has the markup of the button used to execute the request for the next group of images and add markup to the already existing gallery items.

```html
<button type="button" class="load-more">Load more</button>
```

- Initially, the button must be hidden.
- After the first request, the button appears in the interface under the gallery.
- When re-submitting the form, the button is first hidden and then displayed after the request.

In response, the back-end returns the `totalHits` property - the total number of images that match the search criteria (for a free account). If the user has reached the end of the collection, hide the button and display a notification with the text: `"We're sorry, but you've reached the end of search results."`.

## Optional

> ⚠️ The following features are optional, but they will be a good additional practice.

### Notification

After the first request, for each new search, display a notification with the number of images found in total (`totalHits` property). Notification text: `"Hooray! We found totalHits images."`

### `SimpleLightbox` library

Add the display of large images with the [SimpleLightbox](https://simplelightbox.com/) library for a full gallery.

- In your markup, wrap each image card in a link as stated in the documentation.
- The library has a `refresh()` method that must be called every time after adding a new group of image cards.

In order to add the CSS code of the library to the project, you need to add one more import aside from the one described in the documentation.

```js
// Described in import SimpleLightbox from 'simplelightbox' documentation;
// Additional styles import: import 'simplelightbox/dist/simple-lightbox.min.css';
```

### Page scrolling

Make smooth page scrolling after the request and rendering each next group of images. Here is a hint code for you. Figure it out for yourself.

```js
const { height: cardHeight } = document
  .querySelector('.gallery')
  .firstElementChild.getBoundingClientRect();

window.scrollBy({
  top: cardHeight * 2,
  behavior: 'smooth',
});
```

### Infinite scrolling

Instead of the "Load more" button, you can make an infinite loading of images when scrolling the page. You are free to choose your method of implementation and libraries.
