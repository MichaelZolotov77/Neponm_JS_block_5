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
