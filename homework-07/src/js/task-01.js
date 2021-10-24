// const titleElements = document.querySelectorAll('h2')

// console.log(`у списку ${titleElements.length} категорії`);

// titleElements.forEach((all) => {
//     console.log("Категорія:", all.textContent);
//     console.log("Кількість елементів:", all.nextElementSibling.children.length);
// });

/**
 * Implement a logic of actions and invoke those actions below:
 */

// Invoke "Submit for Approval" for softwareEngineerVacancy
// Invoke "Approve" for softwareEngineerVacancy

// Invoke "Submit for Approval" for frontEndEngineerVacancy
// Invoke "Reject" for frontEndEngineerVacancy

// /
//  * Implement the service below the comment block
// const recordType = 'Vacancy';
// const { SoftwareEngineer0001, FrontEndEngineer0020 } = 'nameVacancy';

// class Service {
//   constructor(nameVacancy) {
//     this.nameVacancy = nameVacancy;
//   }
//   SubmitForApproval() {
//     console.log(`Submitted for approval Vacancy: ${this.nameVacancy}`);
//   }
//   Approve() {
//     console.log(`Approved Record: ${this.nameVacancy}`);
//   }
//   Reject() {
//     console.log(`Reject Record: ${this.nameVacancy}`);
//   }
// }

// class Record extends Service {
//   constructor(config) {
//     super(config);
//     console.log(config);
//   }
//   id;
//   type;

//   Record(id, type) {
//     this.id = id;
//     this.type = type;
//   }

//   getId() {
//     return this.id;
//   }

//   getType() {
//     return this.type;
//   }
// }

// const softwareEngineerVacancy = new Record('SoftwareEngineer0001', recordType);
// const frontEndEngineerVacancy = new Record('FrontEndEngineer0020', recordType);

// softwareEngineerVacancy.SubmitForApproval();
// softwareEngineerVacancy.Approve();
// frontEndEngineerVacancy.SubmitForApproval();
// frontEndEngineerVacancy.Reject();
// // console.log(getType());
// // console.log(Record.id);
// console.log(softwareEngineerVacancy);
// console.log(new Record('SoftwareEngineer0001', recordType));

/**
 * Implement a logic of actions and invoke those actions below:
 */

// Invoke "Submit for Approval" for softwareEngineerVacancy
// Invoke "Approve" for softwareEngineerVacancy

// Invoke "Submit for Approval" for frontEndEngineerVacancy
// Invoke "Reject" for frontEndEngineerVacancy

/**
 * Implement the service below the comment block



*/

class Service {
  constructor(id, type) {
    this.id = id;
    this.type = type;
  }
  SubmitForApproval() {
    console.log(`Submitted for approval Vacancy: ${this.id}`);
  }

  Approve() {
    console.log(`Approved Record: ${this.id}`);
  }

  Reject() {
    console.log(`Reject Record: ${this.id}`);
  }
}

class Record extends Service {
  constructor(config, config2) {
    super(config, config2);
    this.Record(config, config2);
  }
  id;
  type;

  Record(id, type) {
    this.id = id;
    this.type = type;
  }

  getId() {
    return this.id;
  }

  getType() {
    return this.type;
  }
}

const recordType = 'Vacancy';

const softwareEngineerVacancy = new Record('SoftwareEngineer0001', recordType);
const frontEndEngineerVacancy = new Record('FrontEndEngineer0020', recordType);
softwareEngineerVacancy.SubmitForApproval();
softwareEngineerVacancy.Approve();

frontEndEngineerVacancy.SubmitForApproval();
frontEndEngineerVacancy.Reject();

// Submitted for approval Vacancy: SoftwareEngineer0001
// Approved Record: SoftwareEngineer0001
// Submitted for approval Vacancy: FrontEndEngineer0020
// Rejected Record: FrontEndEngineer0020
// const first = [1, 3, 3, 4, 6, 5, 4];
// const second = [6, 3, 5, 2, 2];
// let uniq = [
//   ...first.filter(i => !second.includes(i)),
//   ...second.filter(i => !first.includes(i)),
// ];
// let uniqN = [...new Set(uniq)];
// console.log(uniqN);
// let intersection = first.filter(num => !second.includes(num));
// console.log(intersection);

// let Uniq = first
//   .filter(a => !second.includes(a))
//   .concat(second.filter(a => !first.includes(a)));
// let union = Uniq.filter[...new Set([...first, ...second])];
// console.log(union);

// function complement(a1, a2) {
//   return a1.filter(v => a2.indeaOf(v) === -1);
// }
// console.log(complement(first, second));

// var diff = function (first, second) {
//   var simmetricDifference = [];

//   var getMissedItems = function (sourceArray, searchInArray) {
//     sourceArray.forEach(function (item) {
//       if (
//         searchInArray.indexOf(item) === -1 &&
//         simmetricDifference.indexOf(item) === -1
//       ) {
//         simmetricDifference.push(item);
//       }
//     });
//   };

//   getMissedItems(first, second);
//   getMissedItems(second, first);

//   return simmetricDifference;
// };
// console.log(diff);

// second.filter(a => first.indexOf(a) == -1);
// console.log(first);
// function uniqieNumbers(first, second) {
//   let arr = [];

//   if (first !== second) {
//     return arr.push(first);
//   }
// }
// console.log(arr);

// const third = [...first, ...second].filter(
//   (number, index, array) => array.indexOf(number) !== index
// );

// var array3 = first.filter(function (obj) {
//   return second.indexOf(obj) !== 0;
// });
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
// console.log(array3);
