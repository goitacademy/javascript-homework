# Критерии приема

- Создан репозиторий `goit-js-hw-10`
- При сдаче домашней работы есть две ссылки: на исходные файлы и рабочую
  страницу на GitHub pages
- При посещении рабочей страницы (GitHub pages) задания, в консоли нету ошибок и
  предупреждений
- Имена переменных и функций понятные, описательные
- Код отформатирован с помощью Prettier
- Для стилизации достаточно позиционирование и внешний вид приближенный к
  макету. Выделяй 20% времени на стили и 80% на функционал.

```html
<li class="product-list__item" data-id="{{id}}">
  <div class="product">
    <img class="product__img" src="{{imageUrl}}" alt="" width="320" />
    <div class="product__content">
      <h2 class="product__title">{{title}}</h2>
      <p class="product__descr">
        {{description}}
      </p>
      <ul class="product__ingredients">
        {{#each ingredients}}
        <li>{{this}}</li>
        {{/each}}
      </ul>
      <p>Price: {{price}}$</p>
      {{#if available}}
      <button>Add to cart</button>
      {{/if}}
    </div>

    {{#unless available}}
    <div class="product__banner">
      Sold Out
    </div>
    {{/unless}}
  </div>
</li>
```
