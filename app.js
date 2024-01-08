// Destructuring
const developer = {
  id: 1,
  fullname: "John Doe",
  skills: ["HTML", "CSS", "JavaScript"],
  area: "frontend",
  languages: {
    english: "B2",
    spanish: "native",
    hebrew: "A1",
  },
};

// Если переменная уже существует, то необходимо ее переименовать
const area = "abc";
const { area: areaDeveloper, id } = developer;
console.log(area, areaDeveloper, id);
