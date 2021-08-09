const titleElements = document.querySelectorAll('h2')

console.log(`у списку ${titleElements.length} категорії`);

titleElements.forEach((all) => {
    console.log("Категорія:", all.textContent);
    console.log("Кількість елементів:", all.nextElementSibling.children.length);
});