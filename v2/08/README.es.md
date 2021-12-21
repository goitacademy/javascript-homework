**Read in other languages: [Русский](README.md), [Українська](README.ua.md),
[English](README.en.md), [Español](README.es.md), [Polski](README.pl.md).**

# Criterios de admisión

- Se ha creado el repositorio `goit-js-hw-08`.
- Al entregar las tareas, existen dos enlaces: a los archivos de origen y el trabajo 
  en la página de `GitHub Pages`.
- Al visitar la página de trabajos en vivo, no hay errores ni advertencias en la consola.
- El proyecto está construido con la ayuda de
  [parcel-project-template](https://github.com/goitacademy/parcel-project-template).
- El código es formateado por `Prettier`.

## Archivos de inicio

En la [carpeta src](./src) encontrará archivos de inicio con diseño, estilos y
archivos de script conectados para cada trabajo. Cópielos en su proyecto,
reemplazando completamente la carpeta `src` en
[parcel-project-template](https://github.com/goitacademy/parcel-project-template).
Para eso, descargue todo el repositorio como un archivo o use el
[servicio DownGit](https://downgit.github.io/) para descargar una carpeta individual del
depósito.

## Tarea 1 - biblioteca `SimpleLightbox`

Realice esta tarea en los archivos `01-gallery.html` y `01-gallery.js`. Divídalo en
varias subtareas:

1. Añada una biblioteca [SimpleLightbox](https://simplelightbox.com/) como
   dependencia del proyecto usando `npm` (el enlace CDN de su último trabajo
   ya no es necesario).
2. Use el código JavaScript de su tarea anterior, pero refactorice
   teniendo en cuenta que la biblioteca fue instalada a través de `npm`.
   (sintaxis de import/export).

Para incluir el código CSS de la biblioteca en el proyecto, es necesario añadir otro
import más, además de la descrita en la documentación.

```js
// Descrito en la documentación
import SimpleLightbox from 'simplelightbox';
// Importación adicional de estilos
import 'simplelightbox/dist/simple-lightbox.min.css';
```

## Tarea 2 - reproductor de vídeo

El HTML tiene un `<iframe>` con un vídeo para el reproductor de Vimeo. Escriba un script que
guarda el tiempo de reproducción del vídeo actual en el almacenamiento local y en la
recarga de la página, continúa reproduciendo el vídeo desde ese momento.

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

Ejecute esta tarea en los archivos `02-video.html' y `02-video.js'. Divídalo en
varias subtareas:

1. Ver más información sobre la
   [documentación](https://github.com/vimeo/player.js/#vimeo-player-api)
   de la biblioteca del reproductor Vimeo.
2. Añada la biblioteca como dependencia del proyecto a través de `npm`.
3. Inicialice el reproductor en el archivo de script como se describe en la sección
   [pre-existing player](https://github.com/vimeo/player.js/#pre-existing-player),
   pero tenga en cuenta que ha añadido el reproductor como un paquete npm, y no vía CDN.
4. Ordene la documentación del método
   [on()](https://github.com/vimeo/player.js/#onevent-string-callback-function-void)
   y empiece a seguir el evento
   [timeupdate](https://github.com/vimeo/player.js/#events), actualización del
   tiempo de reproducción.
5. Guarde el tiempo de reproducción en el almacenamiento local. Deje que la clave sea
   la secuencia `"videoplayer-current-time"`.
6. Al recargar la página, use el método
   [setCurrentTime()](https://github.com/vimeo/player.js/#setcurrenttimeseconds-number-promisenumber-rangeerrorerror)
   para reanudar la reproducción desde la posición guardada.
7. Añada una biblioteca al proyecto
   [lodash.throttle](https://www.npmjs.com/package/lodash.throttle) y asegúrese
   que el tiempo de reproducción se actualice en la memoria no más de una vez por
   por segundo.

## Tarea 3 - formulario Feedback

HTML tiene un diseño de formulario. Escriba un script que guarde los valores de los espacios
en el almacenamiento local cuando el usuario escriba algo.

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

Ejecute esta tarea en los archivos `03-feedback.html` y `03-feedback.js`. Desglose
en varias subtareas:

1. Monitorizar el evento `input` en el formulario, y cada vez escribir en el almacenamiento
   local en un objeto con los espacios `email` y `message`, en los que se almacenan los
   valores de los espacios del formulario. Dejemos que la clave del repositorio sea la secuencia
   `"feedback-form-state"`.
2. Cuando la página se cargue, compruebe el estado del almacenamiento y si hay
   datos guardados, rellene los espacios del formulario con ellos. En caso contrario, los espacios deben estar
   vacíos.
3. Al enviar el formulario, borre el almacenamiento y los campos del formulario, y emita un objeto con
   los espacios `email` y `message` y sus valores actuales a la consola.
4. Asegúrese de que el repositorio no se actualice con más frecuencia que una vez cada 500 milisegundos.
   Para eso, añada al proyecto y use la biblioteca
   [lodash.throttle](https://www.npmjs.com/package/lodash.throttle).
