**Read in other languages: [Русский](README.md), [Українська](README.ua.md),
[English](README.en.md), [Español](README.es.md), [Polski](README.pl.md).**

# Criterios de admisión

- Se ha creado el repositorio `goit-js-hw-11`.
- Al entregar las tareas, existen dos enlaces: a los archivos de origen y el trabajo 
  en la página de `GitHub Pages`.
- Al visitar la página de trabajos en vivo, no hay errores ni advertencias en la consola.
- El proyecto está construido con la ayuda de
  [parcel-project-template](https://github.com/goitacademy/parcel-project-template).
- Para las consultas HTTP se usa la biblioteca [axios](https://axios-http.com/).
- La sintaxis usada es `async/await`.
- Para las notificaciones se usa la biblioteca
  [notiflix](https://github.com/notiflix/Notiflix#readme).
- El código es formateado por `Prettier`.

# Tarea - búsqueda de imágenes

Cree la parte del frontend de una aplicación de búsqueda y navegación de imágenes basada en palabras clave
palabra. Añada el diseño de los elementos de la interfaz de la
aplicación.

https://user-images.githubusercontent.com/17479434/125040406-49a6f600-e0a0-11eb-975d-e7d8eaf2af6b.mp4

## Formulario de búsqueda

El formulario está inicialmente en un documento HTML. El usuario introducirá una secuencia
de búsqueda en el cuadro de texto, y al enviar el formulario deberá realizarse una consulta HTTP.

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

## Consultas HTTP

Como backend, use la API de servicio público
[Pixabay](https://pixabay.com/api/docs/). Registrese, obtenga su clave de acceso única y lea la documentación.

Una lista de parámetros de secuencias de consulta que debe especificar:

- `key` - es su clave única de acceso a la API.
- `q` - es un término de búsqueda. Lo que el usuario introducirá.
- `image_type` - es el tipo de imagen. Sólo queremos fotos, así que coloque el
  valor a su `photo`.
- `orientation` - la orientación de la foto. Establece el valor de `horizontal`.
- `safesearch` - filtro por edad. Póngalo en `true`.

La respuesta será un array de imágenes que cumplen los criterios de los parámetros de la consulta.
Cada imagen es descrita por un objeto, del cual sólo le interesan las
siguientes propiedades:

- `webformatURL` - enlace a la imagen pequeña para la lista de tarjetas.
- `largeImageURL` - enlace a la imagen grande.
- `tags` - secuencia con una descripción de la imagen. Adecuado para el atributo `alt`.
- `likes` - número de likes.
- `views` - número de vistas.
- `comments` - número de comentarios.
- `downloads` - número de descargas.

Si backend devuelve un array vacío, significa que no se ha encontrado nada adecuado.
En este caso, muestra una notificación con el texto
`"Sorry, there are no images matching your search query. Please try again."`.
Para las notificaciones use la biblioteca.
[notiflix](https://github.com/notiflix/Notiflix#readme).

## Galería y tarjeta de imagen

El elemento `div.gallery` está inicialmente en el documento HTML,
y el marcado de la tarjeta de imagen necesita ser renderizado en él. Al buscar una nueva palabra clave,
hay que borrar todo el contenido de la galería para no mezclar los resultados.

```html
<div class="gallery">
  <!-- Tarjetas de imágenes -->
</div>
```

La plantilla para marcar una tarjeta de imagen única para la galería.

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

## Paginación

La API de Pixabay soporta la paginación y proporciona los parámetros `page` y
`per_page`. Hágalo de manera que entren 40 objetos
en cada respuesta (el valor por defecto es 20)

- El valor inicial del parámetro `page` debe ser `1`.
- Con cada consulta posterior, debe incrementarse en `1`.
- Cuando se busca una nueva palabra clave, el valor de `page` debe volver a su valor original,
  ya que paginará la nueva colección de imágenes.

El documento HTML ya hay un diseño de botón que, cuando se hace clic,
necesita consultar el siguiente grupo de imágenes y añadir el diseño a los elementos 
de la galería ya existentes.

```html
<button type="button" class="load-more">Load more</button>
```

- Inicialmente, el botón debe estar oculto.
- Después de la primera solicitud, el botón aparece en la interfaz debajo de la galería.
- Cuando se vuelve a enviar el formulario, el botón se oculta primero y se vuelve a mostrar después 
  de la solicitud.

En la respuesta el backend devuelve la propiedad `totalHits`, el número total de imágenes
que coinciden con los criterios de búsqueda (para una cuenta gratuita). Si
el usuario ha llegado al final de los resultados de búsqueda, oculte el botón y muestre una notificación que
diga `"We're sorry, but you've reached the end of search results."`.

## Extras

> ⚠️ La siguiente funcionalidad no es necesaria a la hora de entregar la tarea, pero sería una buena
> práctica adicional.

### Notificación

Después de la primera consulta, cada vez que se realice una nueva búsqueda, aparecerá un aviso
que dirá cuántas imágenes se encontraron (propiedad `totalHits`). Texto
de notificación `"Hooray! We found totalHits images."`

### Biblioteca `SimpleLightbox`

Añada la visualización de una versión grande de la imagen con la biblioteca
[SimpleLightbox](https://simplelightbox.com/) para una galería completa.

- El marcado tendrá que envolver cada tarjeta de imagen en una referencia como
  en la documentación.
- La biblioteca tiene un método `refresh()` que debe ser llamado cada vez que
  se añade un nuevo grupo de tarjetas de imagen.

Para incluir el código CSS de la biblioteca en el proyecto, es necesario añadir otro
una importación más, además de la descrita en la documentación.

```js
// Descrito en la documentación
import SimpleLightbox from 'simplelightbox';
// Importación adicional de estilos
import 'simplelightbox/dist/simple-lightbox.min.css';
```

### Desplazamiento de la página

Haga que la página se desplace suavemente después de solicitar y renderizar cada grupo
sucesivo de imágenes. Aquí tienes una pista de códigos para ti, pero descúbrelo,  por su cuenta.

```js
const { height: cardHeight } = document
  .querySelector('.gallery')
  .firstElementChild.getBoundingClientRect();

window.scrollBy({
  top: cardHeight * 2,
  behavior: 'smooth',
});
```

### Desplazamiento infinito

En lugar del botón «Load more», puede hacer que las imágenes se carguen infinitamente a medida que desplazamiento
de la página. Le damos total discreción en la implementación,
puede usar las bibliotecas que desee.
