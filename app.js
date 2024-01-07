// Find in collection
const cities = ["London", "Paris", "Madrid", "Lisboa"];
console.log(cities.includes("Madrid")); // true
console.log(cities.indexOf("Paris")); // 1

const developers = [
  {
    id: 1,
    fullname: "John Doe",
    skills: ["HTML", "CSS", "JavaScript"],
    area: "frontend",
  },
  {
    id: 2,
    fullname: "Adam Smith",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    area: "frontend",
  },
  {
    id: 3,
    fullname: "Will Dowson",
    skills: ["HTML", "PHP", "Laravel"],
    area: "backend",
  },
  {
    id: 4,
    fullname: "Sam Wilson",
    skills: ["HTML", "CSS", "JavaScript", "PHP"],
    area: "fullstack",
  },
];

// Возвратит элемент полностью
const result = developers.find((item) => item.area === "frontend");
console.log(result);

const result2 = developers.find((item) => item.skills.includes("React"));
console.log(result2);

const result3 = developers.findIndex((item) => item.skills.includes("React"));
console.log(result3);

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

const messi = players.find((item) => item.surname === "Messi");
console.log(messi);
