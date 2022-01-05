**Read in other languages: [Русский](README.md), [Українська](README.ua.md), [English](README.en.md), [Español](README.es.md), [Polski](README.pl.md).**

# Acceptance criteria

- `goit-js-hw-07` repository created.
- In your submitted homework, there are two links: One to your source files and one to your working page on `GitHub Pages`.
- During live page visits, there are no errors or warnings generated in the console.
- Clear and descriptive names of variables and functions.
- Code formatted with `Prettier`.

## Start files

- In the [src folder](./src), you will find start files with basic markup and ready-made styles. Copy them to your project. To do this, download this entire repository as an archive or use the [DownGit service](https://downgit.github.io/) to download a separate folder from the repository.
- In the `gallery-items.js` file, there is an array called `galleryItems`, which contains objects with information about Images: small (preview), original (large) and description. It has already been added to each of the project's JS files.

## Task 1 - image gallery

Create a gallery with the ability to click on its items and view full size images in a modal window. Check out the demo video of the gallery.

https://user-images.githubusercontent.com/17479434/127711719-4e293f5b-fbaa-4851-8671-fc841963d961.mp4

Do this task in the `01-gallery.html` and `01-gallery.js` files. Break it down into several subtasks:

1. Creating and rendering markup from the `galleryItems` data array and provided gallery item template.
2. Implementing delegation to `div.gallery` and getting the `url` of a large image.
3. Adding the script and styles of the modal window library [basicLightbox](https://basiclightbox.electerious.com/). Use the [jsdelivrCDN](https://www.jsdelivr.com/package/npm/basiclightbox?path=dist) service and add links to the minified (`.min`) library files to your project.
4. Opening a modal window by clicking on a gallery item. To do this, check out the [documentation](https://github.com/electerious/basicLightbox#readme) and [examples](https://basiclightbox.electerious.com/).
5. Replacing the value of the `src` attribute of the `<img>` element in a modal window before opening. Use the ready-made modal window markup with the image from the examples of the [basicLightbox](https://basiclightbox.electerious.com/) library.

### Gallery item markup

The link to the original image must be stored in the `source` data attribute on the `<img>` element and specified in the link's `href`. Do not add any HTML tags or CSS classes other than those in this template.

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

Please note that the image is wrapped in a link, which means that, when clicked, the user will be redirected to another page by default. Disable this behavior by default.

### Closing from keyboard

> ⚠️ The following features are optional, but they will be good for additional practice.

Add functionality for modal window closing upon pressing the `Escape` key. Make keyboard listening available only while the modal window is open. In the [basicLightbox](https://basiclightbox.electerious.com/) library, there is a method to close the modal window programmatically.

## Task 2 - `SimpleLightbox` library

Create the same gallery as in the first task, but using the [SimpleLightbox](https://simplelightbox.com/) library, which will handle image clicks, modal opening and closing, and image scrolling with the keyboard.

https://user-images.githubusercontent.com/17479434/127714821-4b7527c8-01db-42d3-83f0-8c1578561982.mp4

It is necessary to slightly change the gallery card markup; use this template.

```html
<a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>
```

Do this task in the `02-lightbox.html` and `02-lightbox.js` files. Break it down into several subtasks:

1. Creating and rendering markup from the `galleryItems` data array and provided gallery element template. Use the ready-made code from the first task.
2. Adding the script and library styles using the [cdnjs](https://cdnjs.com/libraries/simplelightbox) CDN service. You need to add links to two files: `simple-lightbox.min.js` and `simple-lightbox.min.css`.
3. Library initialization after gallery items are created and added to `div.gallery`. To do this, read the [SimpleLightbox](https://simplelightbox.com/) documentation - first of all, the Usage and Markup sections.
4. Look in the documentation for the Options section and add an image caption display from the `alt` attribute. Let the caption be at the bottom and appear 250 milliseconds after image opening.
