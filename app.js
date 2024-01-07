// Filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// функция-колбек возвращает true или false, если вернет true,
// то значение запишется в новый массив
const oddNumbers = numbers.filter((num) => num % 2 !== 0);
console.log(oddNumbers);
console.log(numbers);

// Такие массивы из объектов называют коллекциями
const users = [
  {
    id: 1,
    name: "Brad Pette",
    isMarried: true,
    movies: ["Snatch", "Inglorious Basterdes"],
  },
  {
    id: 2,
    name: "Diana Moore",
    isMarried: false,
    movies: ["Inglorious Basterdes"],
  },
  {
    id: 3,
    name: "Olivie Giroud",
    isMarried: true,
    movies: ["Inglorious Basterdes"],
  },
  {
    id: 4,
    name: "Scott Parker",
    isMarried: false,
    movies: ["Inglorious Basterdes"],
  },
];

// если одно из полей будет соответствовать условию, то запишется весь объект
// если нет, то весь объект не запишется в новый массив
const marriedUsers = users.filter((user) => user.isMarried);
console.log(marriedUsers);
// проверим, содержит ли movies значение "Snatch"
const snatchUsers = users.filter((user) => user.movies.includes("Snatch"));
console.log(snatchUsers);

const names = [
  "Mikhail",
  "Ivan",
  "Albert",
  "John",
  "Ian",
  "Petr",
  "Alexandr",
  "Oleg",
  "Jaroslav",
  "Vsevolod",
];

console.log(names[0].length);
const shortNames = names.filter((person) => person.length <= 5);
console.log(shortNames);

const products = [
  {
    id: 1,
    name: "Intro to JavaScript",
    category: "books",
    price: 150,
  },
  {
    id: 2,
    name: "Intro to CSS",
    category: "books",
    price: 120,
  },
  {
    id: 3,
    name: "Deep dive into JavaScript",
    category: "books",
    price: 350,
  },
  {
    id: 4,
    name: "Intro to PHP",
    category: "books",
    price: 250,
  },
  {
    id: 5,
    name: "Deep dive into PHP",
    category: "books",
    price: 350,
  },
];

const cheapProducts = products.filter((product) => product.price < 300);
console.log(cheapProducts);

const developers = [
  {
    id: 1,
    fullName: "Ivan Ivanov",
    skills: ["HTML", "CSS", "Git", "Gulp", "Pug"],
  },
  {
    id: 2,
    fullName: "Petr Petrov",
    skills: ["HTML", "CSS", "Git", "JavaScript", "npm"],
  },
  {
    id: 3,
    fullName: "Ian Melnikov",
    skills: ["HTML", "CSS", "Git", "JavaScript", "TypeScript"],
  },
  {
    id: 4,
    fullName: "Antonio Banderas",
    skills: ["HTML", "CSS", "Git", "JavaScript", "TypeScript", "React"],
  },
];

const tsDevelopers = developers.filter((dev) =>
  dev.skills.includes("TypeScript")
);
console.log(tsDevelopers);
