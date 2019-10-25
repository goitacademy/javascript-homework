# Критерии приема

- Создан репозиторий `goit-js-hw-12-weather-app`.
- При сдаче домашней работы есть две ссылки: на исходные файлы и рабочую
  страницу на GitHub pages.
- При посещении рабочей страницы (GitHub pages) задания, в консоли нету ошибок и
  предупреждений
- Имена переменных и функций понятные, описательные
- Проект собран с помощью `Webpack`
- Код отформатирован с помощью `Prettier`
- Добавь минимальную стилизацию
- Есть файл `getGeoPosition.js` с дефолтным экспортом функции
  `getGeoPosition()`, возвращающей промис с геопозицией.
- Есть файл `fetchWeather.js` с дефолтным экспортом функции
  `fetchWeather(lattitude, longitude)`, возвращающей промис с погодой, ответом
  от API.

## Погодное приложение

Создай небольшое приложение поиска погоды по геопозиции или имени города
используя [DarkSky API](https://darksky.net/dev). Зарегистрируйся на бесплатный
план и получи ключ для аутентификации.

При посещении страницы, используя возможности `Geolocation API`, приложение
пытается получить разрешение пользователя на доступ к его геопозиции.

- Если пользователь разрешил использовать геопозицию, идет HTTP-запрос за
  погодой по его широте и долготе, при этом кеширование геопозиции ставим равным
  60-ти минутам (опция `maximumAge`). Результат отображается в полях секции
  погоды.
- Если пользователь не дал разрешения на использование геопозиции, вывести
  оповещение
  `'Нет прав доступа к геопозиции, используйте поиск по имени города.'`.
- После получения погоды любым из двух способов, пользователь может продолжить
  искать погоду для других городов через форму поиска.

Для оповещений используй плагин [pnotify](https://github.com/sciactive/pnotify).

HTML-разметка состоит из формы поиска, секции погоды и ссылки на погодный API.
Так же можно добавить спиннер и показывать его во время HTTP-запроса.

```html
<form class="search-form" id="search-form">
  <input type="text" name="city" placeholder="Enter city name..." />
  <button type="submit">Get weather</button>
</form>

<section class="weather is-hidden" id="weather">
  <h2>Current weather</h2>
  <img class="icon" src="" alt="" />

  <p>Location: <span data-field="location">Харьков</span></p>
  <p>Temperature: <span data-field="temp">20&#8451;</span></p>
  <p>Humidity: <span data-field="humidity">65%</span></p>
  <p>Wind: <span data-field="wind">3kph</span></p>
  <p>Conditions: <span data-field="conditions">Sunny</span></p>
</section>

<a
  class="credit"
  href="https://darksky.net"
  target="_blank"
  rel="noopener noreferrer"
  ><img
    src="https://darksky.net/dev/img/attribution/poweredby.png"
    alt="darksky logo"
    width="160"
/></a>
```

Секция погоды изначально скрыта и отображается только после получения успешного
ответа от API. Для скрытия используется класс `is-hidden` который сразу есть в
разметке.

```css
.weather.is-hidden {
  display: none;
}
```
