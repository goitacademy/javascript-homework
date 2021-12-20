**Read in other languages: [Русский](README.md), [Українська](README.ua.md),
[English](README.en.md), [Español](README.es.md), [Polski](README.pl.md).**

# Criterios de admisión

- Se ha creado el repositorio `goit-js-hw-08`.
- Hay dos enlaces cuando entregas tu tarea: a los archivos de origen y al trabajo
  página en `Páginas de GitHub`.
- Al visitar la página de trabajos en vivo, no hay errores ni advertencias en la consola.
- El proyecto está construido con
  [parcel-project-template](https://github.com/goitacademy/parcel-project-template).
- El código es formateado por `Prettier`.

## Archivos de inicio

En la [carpeta src](./src) encontrará archivos de inicio con diseño, estilos y
archivos de script conectados para cada trabajo. Cópialos en tu proyecto,
reemplazando completamente la carpeta `src` en
[parcel-project-template](https://github.com/goitacademy/parcel-project-template).
Para ello, descargue este repositorio completo como un archivo o utilice
[servicio DownGit](https://downgit.github.io/) para descargar una carpeta individual del
depósito.

## Tarea 1 - biblioteca `SimpleLightbox`

Realice esta tarea en los archivos `01-gallery.html` y `01-gallery.js`. Dividirlo en
varias subtareas:

1. Añadir una biblioteca [SimpleLightbox](https://simplelightbox.com/) como
   dependencia del proyecto utilizando `npm` (el enlace CDN de su último trabajo
   ya no es necesario).
2. Utiliza el código JavaScript de tu tarea anterior, pero refactoriza
   refactorización, teniendo en cuenta que la biblioteca fue instalada a través de `npm`.
   (sintaxis de import/export).

Para incluir el código CSS de la biblioteca en el proyecto, es necesario añadir otro
un import más, además de la descrita en la documentación.

```js
// Descrito en la documentación
import SimpleLightbox from 'simplelightbox';
// Importación adicional de estilos
import 'simplelightbox/dist/simple-lightbox.min.css';
```

## Tarea 2 - reproductor de vídeo

El HTML tiene un `<iframe>` con un vídeo para el reproductor de Vimeo. Escriba un script que
Guarda el tiempo de reproducción de vídeo actual en el almacenamiento local y en
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

Ejecute esta tarea en los archivos `02-video.html' y `02-video.js'. Divídelo en
varias subtareas:

1. Ver más información sobre
   [documentación](https://github.com/vimeo/player.js/#vimeo-player-api)
   Bibliotecas del reproductor Vimeo.
2. Añade la biblioteca como dependencia del proyecto a través de `npm`.
3. Inicialice el reproductor en el archivo de script como se describe en la sección
   [pre-existing player](https://github.com/vimeo/player.js/#pre-existing-player),
   pero ten en cuenta que has añadido el reproductor como un paquete npm, y no vía CDN.
4. Ordenar la documentación del método
   [on()](https://github.com/vimeo/player.js/#onevent-string-callback-function-void)
   y empezar a seguir el evento
   [timeupdate](https://github.com/vimeo/player.js/#events) - actualización de la hora
   tiempo de reproducción.
5. Guarda el tiempo de reproducción en el almacenamiento local. Deje que la clave para
   es la cadena `"videoplayer-current-time"`.
6. Al recargar la página, utilice el método
   [setCurrentTime()](https://github.com/vimeo/player.js/#setcurrenttimeseconds-number-promisenumber-rangeerrorerror)
   para reanudar la reproducción desde una posición guardada.
7. Añadir una biblioteca al proyecto
   [lodash.throttle](https://www.npmjs.com/package/lodash.throttle) y hacer
   para que el tiempo de reproducción se actualice en la memoria no más de una vez por
   por segundo.

## Tarea 3 - formulario de opinión

HTML tiene un diseño de formulario. Escriba un script que guarde los valores de los campos
en el almacenamiento local cuando el usuario escribe algo.

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

1. Monitorizar el evento `input` en el formulario, y cada vez escribir en el local
   objeto de almacenamiento con los campos `email` y `message`, en los que se almacena el
   valores de los campos del formulario. Dejemos que la clave del repositorio sea la cadena
   `"feedback-form-state"`.
2. Cuando la página se carga, comprueba el estado del almacenamiento y si hay
   datos guardados, rellene los campos del formulario con ellos. En caso contrario, los campos deben ser
   vacía.
3. Al enviar el formulario, borre el almacenamiento y los campos del formulario, y emita un objeto con
   los campos `email` y `message` y sus valores actuales a la consola.
4. Asegúrese de que el repositorio no se actualice con más frecuencia que una vez cada 500 milisegundos.
   Para eso, añada al proyecto y use la biblioteca
   [lodash.throttle](https://www.npmjs.com/package/lodash.throttle).
