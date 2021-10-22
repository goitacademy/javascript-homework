// const titleElements = document.querySelectorAll('h2')

// console.log(`у списку ${titleElements.length} категорії`);

// titleElements.forEach((all) => {
//     console.log("Категорія:", all.textContent);
//     console.log("Кількість елементів:", all.nextElementSibling.children.length);
// });

const first = [1, 3, 3, 4, 6, 5, 4];
const second = [6, 3, 5, 2, 2];
function uniqieNumbers(first, second) {
  let arr = [];

  if (first !== second) {
    return arr.push(first);
  }
}
console.log(arr);

const third = [...first, ...second].filter(
  (number, index, array) => array.indexOf(number) !== index
);

var array3 = first.filter(function (obj) {
  return second.indexOf(obj) !== 0;
});
// let third = first
//   .concat(second)
//   .third.sort(function (a, b) {
//     return a > b;
//   })
//   .filter(function (num, index) {
//     return num !== third[index + 1];
//   });

// const uniqieNumbers = third.filter(
//   (item, index) => third.indexOf(item) !== index
// // );
// const uniqieNumbers = third.reduce(
//   (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
//   []
// );

// const getCommonElements = (first, second) => {
//   const commonElements = [];

//   first.forEach(element => {
//     if (second.includes(first)) {
//       commonElements.push(element);
//     }
//   });

//   return commonElements;
// };
console.log(array3);
