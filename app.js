// JSON - JavaScript Object Notation

const obj = { a: 1, b: 2 };
console.log(String(obj)); // [object Object]

// Преобразование объекта в JSON. JSON это строка.
console.log(JSON.stringify(obj)); // {"a":1,"b":2}

const a = `{
    "firstName": "Mikhail",
    "age": 36,
    "skills": ["CSS", "JavaScript"],
    "lahguages": {
      "key": "value"
    }
  }`;

// Преобразование строки JSON в объект
const myObj = JSON.parse(a);
console.log(myObj.firstName);
console.log(myObj);

const players = [
  {
    id: 1,
    name: "Andres",
    surname: "Iniesta",
    club: "Vissel Cobe",
  },
  {
    id: 2,
    name: "Eden",
    surname: "Hazard",
    club: "Real Madrid",
  },
  {
    id: 3,
    name: "Mo",
    surname: "Salah",
    club: "Liverpool",
  },
  {
    id: 4,
    name: "Lionel",
    surname: "Messi",
    club: "Barcelona",
  },
];

const jsonPlayers = JSON.stringify(players);
console.log(jsonPlayers);
