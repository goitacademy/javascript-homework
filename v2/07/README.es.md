**Read in other languages: [Русский](README.md), [Українська](README.ua.md),
[English](README.en.md), [Español](README.es.md), [Polski](README.pl.md).**

# Criterios de admisión

- Se ha creado el repositorio `goit-js-hw-07`.
- Al entregar las tareas, existen dos enlaces: a los archivos de origen y el trabajo 
  en la página de `GitHub Pages'.
- Al visitar la página de trabajos en vivo, no hay errores ni advertencias en la consola.
- Los nombres de las variables y las funciones son claros y descriptivos.
- El código es formateado por `Prettier'.

## Archivos de inicio

- En la [carpeta src](./src) encontrará los archivos de inicio con el marcado básico y el
  estilos. Cópialos en tu proyecto. Para eso, descargue todo el repositorio 
  como un archivo o use el [servicio DownGit](https://downgit.github.io/) para
  para descargar una carpeta separada del repositorio.
- En el archivo `gallery-items.js` hay un array `galleryItems` que contiene
  objetos con información sobre las imágenes: pequeña (vista previa), el original
  (grande) y descripción. Ya lo hemos conectado a cada uno de los archivos JS del proyecto.

## Tarea 1 - galería de imágenes

Cree una galería con la posibilidad de hacer clic en los elementos y ver una imagen a tamaño completo 
en una ventana modal. Vea un vídeo demo de la galería.

https://user-images.githubusercontent.com/17479434/127711719-4e293f5b-fbaa-4851-8671-fc841963d961.mp4

Ejecute esta tarea en los archivos `01-gallery.html` y `01-gallery.js`. Desglóselo en
varias subtareas:

1. Creación y renderización de la marca basada en el array de datos `galleryItems` y
   la plantilla de elementos de la galería proporcionada.
2. Implementación de la delegación a `div.gallery` y obtención de `url` de un gran
   imagen.
3. Conectar el script de la ventana modal y los estilos de la biblioteca
   [basicLightbox](https://basiclightbox.electerious.com/). Utilice
   [CDN servicio jsdelivr](https://www.jsdelivr.com/package/npm/basiclightbox?path=dist)
   y añadir referencias a archivos de biblioteca minificados (`.min`) al proyecto.
4. Abra una ventana modal haciendo clic en un elemento de la galería. Para ello, consulte 
   [documentación](https://github.com/electerious/basicLightbox#readme) y
   [los ejemplos](https://basiclightbox.electerious.com/).
5. Sustitución del atributo `src` del elemento `<img>` en la ventana modal antes de
   apertura. Use el diseño ya hecho de la ventana modal con la imagen de los
   ejemplos de la biblioteca [basicLightbox](https://basiclightbox.electerious.com/).

### Marcar el elemento de la galería

El enlace a la imagen original debe almacenarse en data-atributo `source` del
elemento `<img>`, y debe estar especificado en el `href` del enlace. No añada ningún otro tag HTML
o distintas clases CSS en esta plantilla.

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

Tenga en cuenta que la imagen está envuelta en un enlace, lo que significa que cuando el usuario hace clic
será redirigido a otra página por defecto. Desactive este
comportamiento por defecto.

### Cierre desde el teclado

> ⚠️ La siguiente funcionalidad no es obligatoria a la hora de entregar una tarea, pero sería una buena
> práctica adicional.

Añada cerrar la ventana modal pulsando `Escape`. Hágao de manera que
el teclado sólo se escuche mientras la ventana modal este abierta. En la biblioteca
[basicLightbox](https://basiclightbox.electerious.com/) existe un método para
para cerrar la ventana modal de forma programada.

## Tarea 2 - biblioteca `SimpleLightbox`

Cree la misma galería que en la primera tarea, pero usando la biblioteca
[SimpleLightbox](https://simplelightbox.com/), que se encargará de manejar los
clics en las imágenes, abriendo y cerrando la ventana modal, y
desplazándose por las imágenes con el teclado.

https://user-images.githubusercontent.com/17479434/127714821-4b7527c8-01db-42d3-83f0-8c1578561982.mp4

Si necesita cambiar ligeramente el diseño de la tarjeta de la galería, use esta plantilla.

```html
<a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>
```

Ejecute esta tarea en los archivos `02-lightbox.html` y `02-lightbox.js`. Divídalo
en varias subtareas:

1. Creación y visualización de marcas a partir del conjunto de datos `galleryItems` y
   la plantilla de elementos de la galería proporcionada. Use el código terminado de la primera
   asignación.
2. Añada al script y los estilos de la biblioteca usando
   [CDN servicio cdnjs](https://cdnjs.com/libraries/simplelightbox). Debe
   añadir los enlaces a los dos archivos: `simple-lightbox.min.js` y
   `simple-lightbox.min.css`.
3. Inicialización de la biblioteca después de crear y añadir los elementos de la galería
   en un `div.gallery`. Para ello, lea la documentación
   [SimpleLightbox](https://simplelightbox.com/) , principalmente de las secciones
   «Usage» y «Markup».
4. Mire la sección «Opciones» de la documentación y añada una pantalla de subtítulos las
   imágenes del atributo `alt`. Deje que el pie de foto esté en la parte inferior y aparezca a
   250 milisegundos después de abrir la imagen.
