const developers = [
  {
    id: 1,
    fullName: "Anton Petrov",
    skills: ["HTML", "CSS", "JavaScript", "Git", "React"],
    salary: 1000,
  },
  {
    id: 2,
    fullName: "Ivan Ivanov",
    skills: ["HTML", "CSS", "JavaScript", "Git", "Vue"],
    salary: 950,
  },
  {
    id: 3,
    fullName: "Albert Sidorov",
    skills: ["HTML", "CSS", "JavaScript", "Git", "jQuery"],
    salary: 850,
  },
];

const middleDevelopers = developers.map((person) => {
  return {
    ...person,
    skills: [...person.skills, "TypeScript"],
    salary: person.salary + 500,
  };
});
console.log(middleDevelopers);
