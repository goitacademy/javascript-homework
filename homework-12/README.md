# Критерии приема

- Созданы репозитории `goit-js-hw-12-weather-app`.
- При сдаче домашней работы есть две ссылки для каждого проекта: на исходные
  файлы и рабочую страницу на GitHub pages.
- При посещении рабочей страницы (GitHub pages) задания, в консоли нету ошибок и
  предупреждений
- Имена переменных и функций понятные, описательные
- Проект собран с помощью `Webpack`
- Код отформатирован с помощью `Prettier`
- Добавь минимальную стилизацию
- Есть файл `getGeoPosition.js` с дефолтным экспортом функции
  `getGeoPosition()`, возвращающей промис с геопозицией.
- Есть файл `fetchWeather.js` с дефолтным экспортом функции
  `fetchWeather(query)`, возвращающей промис с погодой, ответом от API.

## Задание - поиск погоды

Создай небольшое приложение поиска погоды по геопозиции или имени города
используя [Apixu Weather API](https://www.apixu.com/).

При посещении страницы, используя возможности `Geolocation API`, страница
пытается получить разрешение пользователя на доступ к его геопозиции.

- Если пользователь разрешил использовать геопозицию, идет HTTP-запрос за
  погодой по его широте и долготе, при этом кеширование геопозиции ставим равным
  30-ти минутам (опция `maximumAge`). Результат отображается в полях секции
  погоды. Ссылку на иконку в ответе от Apixu API необходимо дополнить протоколом
  `https:`.
- Если пользователь не дал разрешения на использование геопозиции, вывести
  оповещение
  `'Нет прав доступа к геопозиции, используйте поиск по имени города.'`. Для
  оповещений используй плагин [pnotify](https://github.com/sciactive/pnotify).

HTML-разметка включает в себя форму поиска, секцию погоды и ссылку на сам
погодный API. Так же можно добавить спиннер и показывать его во время
HTTP-запроса.

```html
<form class="search-form" id="search-form">
  <input type="text" name="city" placeholder="Enter city name..." />
  <button type="submit">Get weather</button>
</form>

<section class="weather is-hidden" id="weather">
  <h2>Current weather</h2>
  <img
    class="icon"
    src="https://cdn.apixu.com/weather/64x64/day/113.png"
    alt="Sunny"
  />

  <p>Location: <span data-field="location">Харьков</span></p>
  <p>Temperature: <span data-field="temp">20&#8451;</span></p>
  <p>Humidity: <span data-field="humidity">65%</span></p>
  <p>Wind: <span data-field="wind">3kph</span></p>
  <p>Conditions: <span data-field="conditions">Sunny</span></p>
</section>

<p class="credit">
  Powered by
  <a
    href="https://www.apixu.com/"
    target="_blank"
    rel="noopener noreferrer"
    title="Weather API"
    >Apixu.com</a
  >
</p>
```

Секция погоды изначально скрыта и отображается только после получения успешного
ответа от API. Для скрытия используется класс `is-hidden` который сразу есть в
разметке.

```css
.weather.is-hidden {
  display: none;
}
```
