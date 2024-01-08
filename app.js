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

// Тоже можно применить оператор остатка, остаток будет объектом
const area = "abc";
const { area: areaDeveloper = "", id = 2, ...otherProp } = developer;
console.log(area, areaDeveloper, id, otherProp);
