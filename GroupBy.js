const groupBy = require("core-js"); // npm i core-js
const people = [
  {
    name: "Kyle",
    age: 28,
  },
  {
    name: "Sally",
    age: 45,
  },
  {
    name: "John",
    age: 43,
  },
  {
    name: "Sally",
    age: 29,
  },
];

// const g = Object.groupBy(people, (person) => person.name);

const g1 = people.groupBy((person) => person.name);

console.log(g1);
// {
//     Kyle: [ { name: 'Kyle', age: 28 } ],
//     Sally: [ { name: 'Sally', age: 45 }, { name: 'Sally', age: 29 } ],
//     John: [ { name: 'John', age: 43 } ]
//   }

const g2 = people.groupBy((person) => person.name[0]);
console.log(g2);
// {
//     K: [ { name: 'Kyle', age: 28 } ],
//     S: [ { name: 'Sally', age: 45 }, { name: 'Sally', age: 29 } ],
//     J: [ { name: 'John', age: 43 } ]
//   }
