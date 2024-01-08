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

// Если значение свойства - объект
const area = "abc";
const {
  area: areaDeveloper = "",
  id = 2,
  languages: { spanish },
  ...otherProp
} = developer;
console.log(spanish);
