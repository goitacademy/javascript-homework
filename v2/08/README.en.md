**Read in other languages: [Русский](README.md), [Українська](README.ua.md), [English](README.en.md), [Español](README.es.md), [Polski](README.pl.md).**

# Acceptance criteria

- `goit-js-hw-08` repository created.
- In your submitted homework, there are two links: One to your source files and one to your working page on `GitHub Pages`.
- During live page visits, there are no errors or warnings generated in the console.
- Project built with [parcel-project-template](https://github.com/goitacademy/parcel-project-template).
- Code formatted with `Prettier`.

## Start files

In the [src folder](./src), you will find start files with ready-made markup, styles, and added script files for each task. Copy them to your project completely, replacing the `src` folder in [parcel-project-template](https://github.com/goitacademy/parcel-project-template). To do this, download this entire repository as an archive or use the [DownGit service](https://downgit.github.io/) to download a separate folder from the repository.

## Task 1 - `SimpleLightbox` library

Do this task in the `01-gallery.html` and `01-gallery.js` files. Break it down into several subtasks:

1. Add the [SimpleLightbox](https://simplelightbox.com/) library as a project dependency using `npm` (the CDN link from your past work is no longer needed).
2. Use your JavaScript code from the previous homework, but refactor it given that the library was installed via `npm` (import/export syntax).

In order to add the CSS code of the library to the project, you need to add one more import, aside from the one described in the documentation.

```js
// Described in import SimpleLightbox from 'simplelightbox' documentation;
// Additional styles import: import 'simplelightbox/dist/simple-lightbox.min.css';
```

## Task 2 - video player

In HTML, there is an `<iframe>` tag with video for Vimeo player. Write a script that will save the current video playback time to local storage and, upon page reload, continue to play the video from that time.

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

Do this task in the `02-video.html` and `02-video.js` files. Break it down into several subtasks:

1. Check out the [documentation](https://github.com/vimeo/player.js/#vimeo-player-api) of the Vimeo player library.
2. Add the library as a project dependency via `npm`.
3. Initialize the player in the script file as described in the [pre-existing player](https://github.com/vimeo/player.js/#pre-existing-player) section, but note that you have added the player as an npm package, not via CDN.
4. Read the documentation of the [on()](https://github.com/vimeo/player.js/#onevent-string-callback-function-void) method and start tracking the [timeupdate](https://github.com/vimeo/player.js/#events) event - playback time update.
5. Save playback time to local storage. Let the key for the storage be the `"videoplayer-current-time"` string.
6. When reloading the page, use the [setCurrentTime()](https://github.com/vimeo/player.js/#setcurrenttimeseconds-number-promisenumber-rangeerrorerror) method to resume playback from the saved position.
7. Add the [lodash.throttle](https://www.npmjs.com/package/lodash.throttle) library to the project and make sure that the playback time is updated in the storage once per second or less frequently.

## Task 3 - feedback form

In HTML, there is form markup. Write a script that will save field values to local storage when the user types something.

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

Do this task in the `03-feedback.html` and `03-feedback.js` files. Break it down into several subtasks:

1. Track the `input` event on the form, and each time write to local storage an object with the `email` and `message` fields, in which you save the current values of the form fields. Let the key for the storage be the `"feedback-form-state"` string.
2. When loading the page, check the state of the storage, and if it has stored some data, use it to fill in the form fields. Otherwise, the fields must be empty.
3. When submitting the form, clear the storage and form fields and also display the object with the `email` and `message` fields, as well as their current values, in the console.
4. Make sure that the storage is updated no more than once every 500 milliseconds. To do this, add the [lodash.throttle](https://www.npmjs.com/package/lodash.throttle) library to the project and use it.
