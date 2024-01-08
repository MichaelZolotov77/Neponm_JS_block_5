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

// Если данные не придут
const area = "abc";
const {
  area: areaDeveloper = "",
  id = 2,
  languages: { spanish } = {}, // по умолчанию это пустой объект
  skills: [, , basicSkill] = [], // по умолчанию это пустой массив
  ...otherProp
} = developer || {};
console.log(basicSkill, otherProp);
